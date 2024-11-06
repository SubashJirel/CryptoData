import { useReducer, useEffect } from 'react';

// Define action types for different states
const ACTIONS = {
  FETCH_INIT: 'FETCH_INIT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
};

// Define the reducer function to handle the different action types
function dataFetchReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: action.payload,
      };
    default:
      throw new Error();
  }
}

// Create the custom hook
export function useDataFetch(url) {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });
  const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey },
  };

  useEffect(() => {
    let didCancel = false; // to prevent setting state after unmounting

    const fetchData = async () => {
      dispatch({ type: ACTIONS.FETCH_INIT });

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        if (!didCancel) {
          dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: ACTIONS.FETCH_FAILURE, payload: error });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true; // cleanup to prevent updating state if unmounted
    };
  }, [url]);

  return [state, dispatch];
}

/*
Purpose of didCancel
didCancel is used as a cleanup mechanism to avoid setting state on an unmounted component. This is particularly important with asynchronous requests like fetch, where the request might still be in progress when the component unmounts.

Consider this part of the useDataFetch hook:

javascript
Copy code
useEffect(() => {
  let didCancel = false; // Flag to track if the component is unmounted

  const fetchData = async () => {
    dispatch({ type: 'FETCH_INIT' });

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();

      if (!didCancel) { // Only update state if component is still mounted
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      }
    } catch (error) {
      if (!didCancel) { // Only update state if component is still mounted
        dispatch({ type: 'FETCH_FAILURE' });
      }
    }
  };

  fetchData();

  return () => {
    didCancel = true; // Clean up to prevent updating state if unmounted
  };
}, [url]);
Why Use didCancel?
Avoiding Memory Leaks: If a component unmounts while an async fetch is still ongoing, updating the state after the component is unmounted would lead to a memory leak and potentially throw a warning.
Checking Before State Update: By setting didCancel to true in the cleanup function (return () => { didCancel = true; }), we ensure that if the component unmounts before the fetch completes, no state update will occur.
Example Scenario Where didCancel is Important
Imagine a component that triggers a fetch request, but the user navigates away (unmounting the component) before the data returns. Without didCancel, when the fetch completes, it tries to update the state, causing issues since the component no longer exists.

If we remove didCancel, you might see warnings like:

vbnet
Copy code
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
Example of didCancel in Action
Here’s a scenario to demonstrate didCancel in action:

javascript
Copy code
import React, { useState } from 'react';
import { useDataFetch } from './useDataFetch';

function FetchToggleComponent() {
  const [fetchUrl, setFetchUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const [{ data, isLoading, isError }] = useDataFetch(fetchUrl);

  const handleToggleFetch = () => {
    setFetchUrl(fetchUrl === 'https://jsonplaceholder.typicode.com/posts' 
      ? 'https://jsonplaceholder.typicode.com/users' 
      : 'https://jsonplaceholder.typicode.com/posts');
  };

  return (
    <div>
      <button onClick={handleToggleFetch}>
        Toggle Fetch Data
      </button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data.</div>}
      {data && data.map((item) => (
        <div key={item.id}>{item.name || item.title}</div>
      ))}
    </div>
  );
}

export default FetchToggleComponent;
If the user clicks Toggle Fetch Data repeatedly, the component may unmount/re-mount, canceling previous fetch requests in progress. didCancel will prevent updating the state from these canceled requests, ensuring that only the latest fetch updates the component’s state.
*/
