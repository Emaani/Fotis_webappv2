"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';

interface LivestockChartProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            borderColor: string;
            fill: boolean;
        }[];
    };
}

const LivestockChart: React.FC<LivestockChartProps> = ({ data }) => {
    return <Line data={data} />;
};

export default LivestockChart;