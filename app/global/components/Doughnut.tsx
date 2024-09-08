// app/components/Doughnut.tsx
"use client";

import { useEffect } from 'react';
const Highcharts = require('highcharts');

export type TypeDoughnutData = {
  name: string,
  y: number,
  color: string
}

type PropsType = {
  data: TypeDoughnutData[],
  title: string
}

const Doughnut = ({ data, title }: PropsType) => {
  useEffect(() => {
    if (data.length > 0) {
      createChart();
    }
  }, [data]);

  const createChart = () => {
    new Highcharts.Chart({
      chart: {
        renderTo: "doughnut_chart",
        type: 'pie',
      },
      series: [{
        data: data,
        innerSize: '88%',
      }]
    });
  }

  return (
    <div id='doughnut_chart'></div>
  );
}

export default Doughnut;
