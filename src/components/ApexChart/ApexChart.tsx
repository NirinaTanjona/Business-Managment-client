import { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import Card from '../Card'
import { TradeType } from '../../types'
import { network, logger } from '../../utils'
import { useParams } from 'react-router-dom'




const ApexChart = () => {

  const [ trades, setTrades ] = useState<TradeType[] | null>(null)
  const { id } = useParams()

  let balanceList: number[] = []
  let dateList: string[] = []


  if (trades) {
    balanceList = trades.map(item => parseFloat(item.balance))
    dateList = trades.map(item => {
        const dateObj = new Date(item.modified)
        console.log("dateObj: ", item.modified)
        const formattedString = dateObj.toISOString().replace('T', ' ').replace('Z', '').slice(0, -5);
        return formattedString
    })
  }


  useEffect(() => {
    try {
      network.GET_JSON(`/trade/${id}/get_trades_from_summary/`).then(response => {
        setTrades(response.data)
      })
    } catch (e) {
      logger.error('Error fetching trades', e)
    }

  }, [id])

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
        opacityFrom: 0.7,
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
    <Card>
      <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
    </Card>
  );
}

export default ApexChart;
