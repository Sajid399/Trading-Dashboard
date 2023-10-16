import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const options = {
    chart: {
      type: 'candlestick',
      height: '350', // Increased height to accommodate labels
    },
    title: {
      text: 'Candlestick Chart',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (val) {
          const date = new Date(val);
          return date.toLocaleDateString(); // Format the date as needed
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        formatter: function (val) {
          return '$' + val.toFixed(2); // Format the dollar price as needed
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00b957', // Green candles
          downward: '#ff5b5b', // Pink candles
        },
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: new Date(2023, 0, 1).getTime(),
          y: [200, 220, 150, 180], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 2).getTime(),
          y: [250, 140, 170, 220], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 4).getTime(),
          y: [0, 110, 160, 120], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 10).getTime(),
          y: [210, 110, 160, 150], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 8).getTime(),
          y: [100, 110, 160, 130], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 15).getTime(),
          y: [290, 110, 160, 190], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 19).getTime(),
          y: [190, 220, 150, 180], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 12).getTime(),
          y: [270, 140, 170, 220], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 25).getTime(),
          y: [0, 110, 160, 190], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 1).getTime(),
          y: [220, 110, 160, 170], // [High, Low, Open, Close]
        },
        {
          x: new Date(2023, 0, 22).getTime(),
          y: [90, 110, 160, 195], // [High, Low, Open, Close]
        },
        // Add more data points here
      ],
    },
  ];


  return (
    <div className='col-md-12'>
      <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default LineChart;
