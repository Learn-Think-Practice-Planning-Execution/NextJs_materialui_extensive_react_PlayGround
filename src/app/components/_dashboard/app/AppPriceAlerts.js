import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

// const CHART_DATA = [
//   {
//     name: 'Customer - High',
//     data: [30, 27, 22, 30, 35, 29, 37, 32, 25, 32, 27, 33]
//   },
//   {
//     name: 'Customer - Low',
//     data: [10, 8, 5, 8, 15, 7, 13, 5, 15, 6, 13, 10]
//   },
//   {
//     name: 'Peers - High',
//     data: [32, 23, 28, 33, 27, 36, 27, 35, 30, 38, 35, 40]
//   },
//   {
//     name: 'Peers - Low',
//     data: [8, 15, 12, 5, 12, 15, 11, 14, 5, 10, 6, 12]
//   },
//   {
//     name: 'Global - High',
//     data: [28, 29, 33, 36, 32, 32, 33, 30, 35, 25, 32, 38]
//   },
//   {
//     name: 'Global - Low',
//     data: [6, 11, 14, 10, 8, 13, 15, 9, 8, 15, 12, 5]
//   }
// ];

export default function AppPriceAlerts({ chartData }) {
  console.log('AppPriceAlertsdata', chartData);
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 16,
        left: 8,
        blur: 10,
        opacity: 0.15
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    // title: {
    //   text: 'Average High & Low Temperature',
    //   align: 'left'
    // },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.3
      }
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Price'
      },
      min: 0,
      max: 50
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -5,
      offsetX: 0
    }
  });

  // yaxis: {
  //   title: {
  //     text: 'Price'
  //   },
  //   min: 0,
  //   max: 50,
  //   labels: {
  //     formatter: (value) => {
  //       if (value === Math.floor(value)) {
  //         return value.toString();
  //       }
  //       return '';
  //     }
  //   }
  // }

  return (
    <Box dir="ltr" className="graphSpacing">
      <ReactApexChart
        type="line"
        series={
          chartData.length > 0
            ? chartData
            : [
                {
                  name: 'Consumption',
                  data: []
                }
              ]
        }
        // series={chartData}
        // series={data?.status === 'success' ? data.data : CHART_DATA}
        // series={}
        // series={CHART_DATA}
        options={chartOptions}
        height={350}
      />
    </Box>
  );
}
