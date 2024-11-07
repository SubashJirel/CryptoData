import { gettingDate } from './getDate';

export const settingChartData = (coinName, setChartData, prices1) => {
  setChartData({
    labels: prices1?.map((data) => gettingDate(data[0])),
    datasets: [
      {
        label: coinName,
        data: prices1?.map((data) => data[1]),
        borderWidth: 1,
        fill: true,
        backgroundColor: 'rgba(58, 128, 233,0.1)',
        tension: 0.25,
        borderColor: '#3a80e9',
        pointRadius: 0,
        yAxisID: 'crypto1',
      },
    ],
  });
};
