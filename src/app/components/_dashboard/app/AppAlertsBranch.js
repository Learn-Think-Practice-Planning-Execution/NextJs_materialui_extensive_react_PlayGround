import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 1420, 1510] }];

export default function AppAlertsBranch() {
  const [state, setState] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          'Branch1',
          'Branch2',
          'Branch3',
          'Branch4',
          'Branch5',
          'Branch5',
          'Branch6',
          'Branch7',
          'Branch8'
        ]
      },
      yaxis: {
        title: {
          text: 'No of Alerts'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: (val) => `$ ${val} thousands`
        }
      }
    }
  });

  return (
    <Card>
      {/* <CardHeader title="Conversion Rates" subheader="(+43%) than last year" /> */}
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </Box>
    </Card>
  );
}
