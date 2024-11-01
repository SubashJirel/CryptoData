import { useState, useEffect } from 'react';

import './App.css';
import Button from '@mui/material/Button';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);
  const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;
  const url = 'https://api.coingecko.com/api/v3/ping';
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [count]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
