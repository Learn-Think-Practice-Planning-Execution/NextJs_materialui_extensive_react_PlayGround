import { merge } from 'lodash';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

// const CHART_DATA = [{ data: [0.2, 35, 22, 17, 18, 2] }];

export default function ShipmentValueBarChart({ chartData }) {
  const [chartYear, setChartYear] = useState([]); // set data and check length
  const [chartValue, setChartValue] = useState([]); // set data and check length

  useEffect(() => {
    if (
      chartData !== undefined &&
      chartData !== null &&
      chartData?.value_of_shipment_usd_graph !== undefined &&
      chartData?.value_of_shipment_usd_graph !== null
    ) {
      const objKeys = Object.keys(chartData?.value_of_shipment_usd_graph);
      const objValues = Object.values(chartData?.value_of_shipment_usd_graph);
      let chartValuesData = objValues;
      chartValuesData = [{ data: objValues.map((item) => item.toString()) }]; // taken string so that we can show 0 value as well into label before decimal
      setChartYear(objKeys);
      setChartValue(chartValuesData);
    }
  }, [chartData]);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        // formatter: (seriesName) => fNumber(seriesName),
        formatter: (seriesName) => seriesName,
        title: {
          // formatter: (seriesName) => `#${seriesName}`
          formatter: (seriesName) => `${''}`
        }
      }
    },
    xaxis: {
      // categories: ['2018', '2019', '2020', '2021', '2022', '2023']
      categories: chartYear
    }
  });

  return (
    <>
      {/* <CardHeader title="Conversion Rates" subheader="(+43%) than last year" /> */}
      <Box dir="ltr">
        <ReactApexChart
          type="bar"
          series={chartValue.length > 0 ? chartValue : [{ data: [] }]}
          // series={CHART_DATA}
          options={chartOptions}
          height={350}
        />
      </Box>
    </>
  );
}
