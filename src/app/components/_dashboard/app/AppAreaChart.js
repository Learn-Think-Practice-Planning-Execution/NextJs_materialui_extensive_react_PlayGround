import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@mui/material';
// icons
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Series 1',
    data: [2, 23, 19, 45, 38, 52, 45]
  }
];

export default function AppAreaChart({
  data,
  title,
  openAlerts,
  icon,
  iconText,
  chartData,
  chartYear,
  footerText
}) {
  // console.log('dataItem', data);
  // console.log('chartYear', chartYear !== undefined && chartYear !== null ? chartYear : '');
  // console.log('chartYear', chartData !== undefined && chartData !== null ? chartData : '');

  const graphkeyData = data?.graphkey;

  if (!graphkeyData) {
    console.error('graphkeyData is undefined or null');
    // Handle the error or return from the function
  }

  const categoriesDate = [];
  const DataChartseries = [];

  Object.keys(graphkeyData)?.forEach((graphDataItem, graphDataIndex) => {
    categoriesDate?.push(graphDataItem);

    // Check if graphkeyData[graphDataItem] is an object or array before pushing
    const dataItem = graphkeyData?.[graphDataItem];
    if (dataItem && typeof dataItem === 'object') {
      DataChartseries?.push(dataItem);
    } else {
      console.error(`Data for ${graphDataItem} is undefined or not an object`);
      // Handle the error or return from the function
    }
  });

  const ChatDataNewArray = [{ name: '', data: [...DataChartseries] }];

  // const [chartData2, setChartData2] = useState(null);
  // useEffect(() => {
  //   if (chartData !== undefined && chartData !== null) {
  //     setChartData2(chartData);
  //   }
  // }, [chartYear]);

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
      categories: [...categoriesDate],
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

  // useEffect(() => {
  //   if (graphData !== undefined && graphData !== null) {
  //     // console.log('objValues', Object.keys(chartData), Object.values(chartData));
  //     const objKeys = Object.keys(graphData);
  //     const objValues = [
  //       {
  //         name: '',
  //         data: Object.values(graphData)
  //       }
  //     ];
  //   }
  //   setChartYear(objKeys);
  //   setChartData(objValues);
  // }, []);

  return (
    <>
      <Typography variant="body2" className="areaChartTitle">
        {data?.title}
      </Typography>
      <Typography variant="body2" className="areaChartSubheader mb-1">
        {data?.value}
      </Typography>
      <div className="displayFlex alignItemsCenter">
        {data?.iconDiff > 0 ? <MdArrowDropUp size={18} /> : <MdArrowDropDown size={18} />}
        <Typography variant="body2">{Math.abs(data?.iconDiff)}</Typography>
      </div>
      <Box mb={1}>
        <ReactApexChart
          type="area"
          series={ChatDataNewArray}
          options={chartOptions}
          height="100"
          className="areaChart"
        />
      </Box>
      <Typography variant="body2" className="">
        {data?.footerText}
      </Typography>
    </>
  );
}
