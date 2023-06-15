import { useEffect } from 'react';
const  Highcharts = require('highcharts');  
export type ChartSerie ={
    name:string,
    data: number[]
}
type PropsType ={
    series: ChartSerie[],
    categories: string[]
}
const LineChart =({series,categories}:PropsType)=>{

    useEffect(()=>{
        if (series.length>0 && categories.length>0) {
            createLine();
        }
    },[series,categories]);

    const createLine =()=>{
        Highcharts.chart('chart_container', { 
            chart: {
                type: 'line'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories:categories,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            colors: [
                '#ccbeda',
                '#ccbeda',
            ],
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: series
        });
    }

    return (
        <div id='chart_container'></div>
    );
}

export default LineChart;