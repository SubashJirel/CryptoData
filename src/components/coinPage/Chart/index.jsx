import React from 'react';
import { useState, useEffect } from 'react';
import { useDataFetch } from '../../../hooks/useFetchData';
import Loader from '../../common/Loader';
import LineChart from '../LineChart';
import { gettingDate } from '../../../functions/getDate';
function ChartData({ coinName, id, day, setDay }) {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`;
  const url2 = `http://localhost:3000/api/coins/market_chart/${id}?days=${day}`;
  // const url =
  //   'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=20';
  const [{ data, isLoading, isError }] = useDataFetch(url2, day);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       if (data) {
  //         const prices = data.prices;
  //         setChartData({
  //           labels: prices.map((data) => gettingDate(data[0])),
  //           datasets: [
  //             {
  //               label: coin.name,
  //               data: prices.map((data) => data[1]),
  //               borderWidth: 1,
  //               fill: false,
  //               backgroundColor: 'rgba(58, 128, 233,0.1)',
  //               tension: 0.25,
  //               borderColor: '#3a80e9',
  //               pointRadius: 0,
  //             },
  //           ],
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // }, []);
  useEffect(() => {
    if (data) {
      setChartData({
        labels: data.prices.map((data) => gettingDate(data[0])),
        datasets: [
          {
            label: coinName,
            data: data.prices.map((data) => data[1]),
            borderWidth: 1,
            fill: false,
            backgroundColor: 'rgba(98, 128, 233,0.1)',
            tension: 0.25,
            borderColor: '#3a80e9',
            pointRadius: 0,
          },
        ],
      });
    }
  }, [data]); // Runs only when `data` changes
  console.log('the chart data state is now', chartData);
  // State to track selected data type
  const [selectedDataType, setSelectedDataType] = useState('prices');

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error fetching data. {data}</h1>;
  }
  // Handle displaying selected data type
  const displayedData = data ? data[selectedDataType] : [];

  console.log('THe chart data is >>>', data);
  return (
    <div>
      <div>
        {/* Buttons to select data type */}
        <button onClick={() => setSelectedDataType('prices')}>Prices</button>
        <button onClick={() => setSelectedDataType('market_caps')}>
          Market Caps
        </button>
        <button onClick={() => setSelectedDataType('total_volumes')}>
          Total Volumes
        </button>
      </div>

      <div>
        <button onClick={() => setDay(5)}>Five</button>
        <button onClick={() => setDay(7)}>Seven</button>
        <button onClick={() => setDay(20)}>Twenty</button>
      </div>
      <div>
        <h3>Selected Data: {selectedDataType}</h3>
        <div className="grey-wrapper">
          <LineChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default ChartData;
