import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataFetch } from '../hooks/useFetchData';
import Loader from '../components/common/Loader';
import List from '../components/dashboard/list';
import Info from '../components/coinPage/Info';

import LineChart from '../components/coinPage/LineChart';
import { settingCoinObject } from '../functions/settingCoinObject';
import ChartData from '../components/coinPage/Chart';
import { gettingDate } from '../functions/getDate';

function Coin() {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const url2 = `http://localhost:3000/api/coins/${id}`;
  const [{ data, isLoading, isError }] = useDataFetch(url2);
  const [coin, setCoin] = useState({});
  const [day, setDay] = useState(30);

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
  return (
    <>
      <div className="px-3 py-3 sm: p-4 md:p-5 lg:px-10">
        {data && Object.keys(coin).length !== 0 && <List coin={coin} />}
      </div>
      <div className="grey-wrapper">
        {data && Object.keys(coin).length !== 0 && (
          <Info title={coin.name} desc={coin.desc} />
        )}
      </div>
      <div className="chart">
        <p>THe chart</p>
        {data && Object.keys(coin).length !== 0 && (
          <ChartData
            coinName={coin.name}
            id={coin.id}
            day={day}
            setDay={setDay}
          />
        )}
      </div>
    </>
  );
}

export default Coin;
