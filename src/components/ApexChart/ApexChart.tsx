import React, { useContext } from 'react';
import Paper from '@mui/material/Paper'
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { SummaryContext } from '../../context/SummaryContext'




const ApexChart = () => {

  const data = useContext( SummaryContext )

  const balanceList = data ? data.attributes.trades.map(item => parseFloat(item.balance)) : []
  const dateList = data ? data.attributes.trades.map(item => {
    const dateObj = new Date(item.modified)
    const formattedString = dateObj.toISOString().replace('T', ' ').replace('Z', '').slice(0, -5);
    return formattedString
  }) : []


  const options: ApexOptions = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      },
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Balance Capital through time',
      align: 'center'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      labels: {
        formatter: function (val:number) {
          return val.toFixed(2);
        },
      },
      title: {
        text: 'Balance'
      },
    },
    xaxis: {
      type: 'datetime',
      categories: dateList
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val:number) {
          return val.toFixed(2)
        }
      }
    }
  }

  const series: ApexOptions['series']= [{
    name: 'balance',
    data: balanceList
  }]


    const chartData = {
      series: series,
      options: options
    };

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
    </Paper>
  );
}

export default ApexChart;
