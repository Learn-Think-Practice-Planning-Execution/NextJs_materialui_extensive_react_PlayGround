import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
// icons
import { MdArrowDropDown } from 'react-icons/md';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

// const CHART_DATA = [
//   {
//     name: '',
//     data: [10, 30, 15, 50, 21, 42, 5, 61, 35, 67, 48, 84]
//   }
// ];

export default function AppLineChart({ chartData }) {
  const chartOptions = merge(BaseOptionChart(), {
    padding: {
      left: 0
    },
    chart: {
      parentHeightOffset: 0
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        'Jan 21',
        'Feb 21',
        'Mar 21',
        'Apr 21',
        'May 21',
        'Jun 21',
        'Jul 21',
        'Aug 21',
        'Sep 21',
        'Oct 21',
        'Nov 21',
        'Dec 21'
      ],
      labels: {
        show: false,
        offsetX: 0,
        offsetY: 0
      }
    },
    yaxis: {
      labels: {
        show: false,
        offsetX: 0,
        offsetY: 0
      }
    }
  });

  return (
    <ReactApexChart
      type="line"
      // series={data}
      series={
        chartData.length > 0
          ? chartData
          : [
              {
                name: '',
                data: []
              }
            ]
      }
      options={chartOptions}
      height="80"
      className="lineChart"
    />
  );
}
