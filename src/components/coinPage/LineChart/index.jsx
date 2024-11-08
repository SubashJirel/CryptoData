import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; //Dont get rid of this
function LineChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };
  return <Line data={chartData} options={options} />;
}
export default LineChart;
