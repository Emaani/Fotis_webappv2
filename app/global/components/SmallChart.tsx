"use client"
import { useEffect } from 'react';
const Highcharts = require('highcharts');

type PropsType = {
    data: number[],
    color:string,
    containerId:string
}
const SmallChat = ({ data,color,containerId }: PropsType) => {

    useEffect(() => {
        if (data.length > 0 && containerId ) {
            createLine();
        }
    }, [data]);

    const createLine = () => {
        Highcharts.chart(containerId, {
            chart: {
                type: 'line',
                spacing: [0, 0, 0, 0] // Remove spacing around the chart
            },
            title: {
                text: null // Set title text to null to hide it
            },
            legend: {
                enabled: false // Hide the legend
            },
            xAxis: {
                visible: false // Hide the x-axis
            },
            tooltip: {
                enabled: false // Disable the tooltip
            },
            yAxis: {
                visible: false // Hide the y-axis
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: false // Hide the dots on the line
                    }
                }
            },
            series: [{
                color:color,
                name: 'Trend Line',
                data: data // Example data
            }]
        });
    }

    return (
        <div  className=' max-h-7' id={containerId}></div>
    );
}

export default SmallChat;