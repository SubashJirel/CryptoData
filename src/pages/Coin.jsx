import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataFetch } from '../hooks/useFetchData';
import Loader from '../components/common/Loader';
import List from '../components/dashboard/list';
import { settingCoinObject } from '../functions/settingCoinObject';

function Coin() {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false`;
  const [{ data, isLoading, isError }] = useDataFetch(url);
  const [coin, setCoin] = useState({});
  useEffect(() => {
    if (data) {
      settingCoinObject(data, setCoin);
    }
  }, [data]);
  console.log('The coin data is >>>> ', data);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error fetching data. {data}</h1>;
  }
  return data && Object.keys(coin).length !== 0 && <List coin={coin} />;
}

export default Coin;
