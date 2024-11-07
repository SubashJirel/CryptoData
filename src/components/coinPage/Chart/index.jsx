import React from 'react';
import { useState, useEffect } from 'react';
import { useDataFetch } from '../../../hooks/useFetchData';
import Loader from '../../common/Loader';
import LineChart from '../LineChart';
import { gettingDate } from '../../../functions/getDate';
import { settingChartData } from '../../../functions/settingChartData';

function ChartData({ coinName, id, day, setDay, selectedDataType }) {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`;
  const url2 = `http://localhost:3000/api/coins/market_chart/${id}?days=${day}`;
  // const url =
  //   'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=20';
  const [{ data, isLoading, isError }] = useDataFetch(url2, day);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  // const [selectedDataType, setSelectedDataType] = useState('prices');

  useEffect(() => {
    if (data) {
      settingChartData(coinName, setChartData, data[selectedDataType]);

      // setChartData({
      //   labels: data.prices.map((data) => gettingDate(data[0])),
      //   datasets: [
      //     {
      //       label: coinName,
      //       data: data.prices.map((data) => data[1]),
      //       borderWidth: 1,
      //       fill: false,
      //       backgroundColor: 'rgba(98, 128, 233,0.1)',
      //       tension: 0.25,
      //       borderColor: '#3a80e9',
      //       pointRadius: 0,
      //     },
      //   ],
      // });
    }
  }, [data, selectedDataType, coinName]); // Runs only when `data` changes
  console.log('the chart data state is now', chartData);
  // State to track selected data type
  const handleDaysChange = async (event) => {
    setDay(event.target.value);
  };

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
        {/* <h3>Selected Data: {selectedDataType}</h3> */}
        <div className="grey-wrapper m-auto w-11/12 h-96 sm:h-[28rem]  ">
          <LineChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default ChartData;
