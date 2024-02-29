import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

// const CHART_DATA = [{ data: [1100, 580, 850, 700, 1200, 750, 1400, 1500, 670, 900, 1050, 450] }];

export default function FCRScoreReportBarChart({ chartData }) {
  console.log('chartData', chartData, chartData.length > 0);
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          // formatter: (seriesName) => `#${seriesName}`
          formatter: (seriesName) => `${''}`
        }
      }
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
      ]
    }
  });

  return (
    <>
      {/* <CardHeader title="Conversion Rates" subheader="(+43%) than last year" /> */}
      <Box dir="ltr">
        <ReactApexChart
          type="bar"
          // series={CHART_DATA}
          // series={chartData}
          series={chartData.length > 0 ? chartData : [{ data: [] }]}
          options={chartOptions}
          height={350}
        />
      </Box>
    </>
  );
}
