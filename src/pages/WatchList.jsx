import React from 'react';
import { useEffect } from 'react';

function WatchList() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'http://localhost:3000/api/coins/bitcoin?day=25&currency=usd'
        );
        const data = await response.json();
        console.log('the proxy server data is', data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return <div>WatchList</div>;
}

export default WatchList;
