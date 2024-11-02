import React from 'react';
// import TabsComponent from '../components/dashboard/tabs';
import TabsComponent from '../components/dashboard/tabs';
import { useDataFetch } from '../hooks/useFetchData';

function Dashboard() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

  const [{ data, isLoading, isError }] = useDataFetch(url);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error fetching data. {data}</h1>;
  }

  return (
    <div>
      <TabsComponent data={data} />
    </div>
  );
}

export default Dashboard;
