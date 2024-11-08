import React, { useEffect, useState } from 'react';
// import Button from "../components/Common/Button";
import Button from '../components/common/button';
import { useDataFetch } from '../hooks/useFetchData';
import { Link } from 'react-router-dom';
import TabsComponent from '../components/dashboard/tabs';
import Loader from '../components/common/Loader';

function Watchlist() {
  // const watchlist = JSON.parse(localStorage.getItem('watchlist'));
  const [watchlist, setWatchlist] = useState(
    () => JSON.parse(localStorage.getItem('watchlist')) || []
  );
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  const url2 = 'https://proxyservercrypto.up.railway.app/api/coins';

  const [{ data, isLoading, isError }] = useDataFetch(url2);
  useEffect(() => {
    if (data) {
      setCoins(data?.filter((coin) => watchlist.includes(coin.id)));
    }
  }, [data, watchlist]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error fetching data. </h1>;
  }
  // console.log('THe coins state iss', coins);
  console.log('the watchlist is', watchlist);
  return (
    <div>
      {watchlist?.length > 0 ? (
        <TabsComponent data={coins} />
      ) : (
        <div>
          <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-6xl text-center mt-8">
            Sorry, No Items In The Watchlist.
          </h1>
          <div className="flex justify-center m-8">
            <Link to="/dashboard">
              <Button text="Dashboard" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
