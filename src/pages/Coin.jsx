import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDataFetch } from '../hooks/useFetchData';
import Loader from '../components/common/Loader';
import List from '../components/dashboard/list';
// import Info from '../components/coinPage/Info';

import LineChart from '../components/coinPage/LineChart';
import { settingCoinObject } from '../functions/settingCoinObject';
import ChartData from '../components/coinPage/Chart';
import { gettingDate } from '../functions/getDate';

import SelectDays from '../components/coinPage/SelectDays';

function Coin() {
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const url2 = `http://localhost:3000/api/coins/${id}`;
  const [{ data, isLoading, isError }] = useDataFetch(url2);
  const [coin, setCoin] = useState({});
  const [day, setDay] = useState(30);
  const [selectedDataType, setSelectedDataType] = useState('prices');

  useEffect(() => {
    if (data) {
      settingCoinObject(data, setCoin);
    }
  }, [data]);
  console.log('The coin data is >>>> ', data);

  return (
    <>
      {/* <div className="px-3 py-3 sm: p-4 md:p-5 lg:px-10">
        {data && Object.keys(coin).length !== 0 && <List coin={coin} />}
      </div> */}

      <div className="chart">
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-col sm:flex-row">
          <SelectDays
            handleDaysChange={(e) => setDay(e.target.value)}
            days={day}
          />
          <div className="flex max-h-10 gap-2 ">
            <div
              onClick={() => setSelectedDataType('prices')}
              className={`px-4 py-2 cursor-pointer ${
                selectedDataType === 'prices'
                  ? 'bg-blueBg bg-opacity-80 border-b-2 border-textClr'
                  : 'hover:bg-blueBg hover:border-b-2 border-textClr'
              }`}
            >
              Prices
            </div>
            <div
              onClick={() => setSelectedDataType('market_caps')}
              className={`px-4 py-2 cursor-pointer ${
                selectedDataType === 'market_caps'
                  ? 'bg-blueBg bg-opacity-80 border-b-2 border-textClr'
                  : 'hover:bg-blueBg hover:border-b-2 border-textClr'
              }`}
            >
              Market Cap
            </div>
            <div
              onClick={() => setSelectedDataType('total_volumes')}
              className={`px-4 py-2 cursor-pointer ${
                selectedDataType === 'total_volumes'
                  ? 'bg-blueBg bg-opacity-80 border-b-2 border-textClr'
                  : 'hover:bg-blueBg hover:border-b-2 border-textClr'
              }`}
            >
              Total Volumes
            </div>
          </div>
        </div>
        {isLoading && <Loader />}
        {isError && <h1>Error fetching data.</h1>}
        {data && Object.keys(coin).length !== 0 && (
          <ChartData
            coinName={coin.name}
            id={coin.id}
            day={day}
            setDay={setDay}
            selectedDataType={selectedDataType}
          />
        )}
      </div>
      {/* info component was rendered and chartData later. fix later */}
      {/* <div className="">
        {!isLoading && data && Object.keys(coin).length !== 0 && (
          <Info title={coin.name} desc={coin.desc} />
        )}
      </div> */}
    </>
  );
}

export default Coin;
