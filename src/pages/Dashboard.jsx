import React from 'react';
// import TabsComponent from '../components/dashboard/tabs';
import { useState, useEffect } from 'react';
import TabsComponent from '../components/dashboard/tabs';
import { useDataFetch } from '../hooks/useFetchData';
import Search from '../components/dashboard/search';
import PaginationControlled from '../components/dashboard/Pagination';
import Loader from '../components/common/Loader';

function Dashboard() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const itemsPerPage = 10;

  const [{ data, isLoading, isError }] = useDataFetch(url);
  useEffect(() => {
    if (data) {
      // Set initial paginated coins for page 1
      setPaginatedCoins(data.slice(0, itemsPerPage));
    }
    console.log('fo und pagiii', paginatedCoins);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error fetching data. {data}</h1>;
  }
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  // const handlePageChange = (event, value) => {
  //   setPage(value);
  //   // Value = new page number
  //   let initialCount = (value - 1) * 10;
  //   setPaginatedCoins(data.slice(initialCount, initialCount + 10));
  // };
  const handlePageChange = (event, value) => {
    setPage(value);
    const start = (value - 1) * itemsPerPage;
    setPaginatedCoins(data.slice(start, start + itemsPerPage));
  };
  var filteredCoins = data?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div>
      <Search search={search} handleChange={handleChange} />
      <TabsComponent
        data={search ? filteredCoins : paginatedCoins}
        setSearch={setSearch}
      />
      {!search && (
        <PaginationControlled
          page={page}
          handlePageChange={handlePageChange}
          count={Math.ceil(data?.length / itemsPerPage)} // Dynamic page count
        />
      )}
    </div>
  );
}

export default Dashboard;
