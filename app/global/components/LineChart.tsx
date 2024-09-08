// app/components/LineChart.tsx
"use client";

import { useEffect } from 'react';
const Highcharts = require('highcharts');

export type ChartSerie = {
  name: string,
  data: number[]
}

type PropsType = {
  series: ChartSerie[],
  categories: string[]
}

const LineChart = ({ series, categories }: PropsType) => {
  useEffect(() => {
    if (series.length > 0 && categories.length > 0) {
      createLine();
    }
  }, [series, categories]);

  const createLine = () => {
    Highcharts.chart('chart_container', {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: categories,
      },
      series: series
    });
  }

  return (
    <div id='chart_container'></div>
  );
}

export default LineChart;
