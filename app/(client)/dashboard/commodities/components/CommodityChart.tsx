"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';

interface CommodityChartProps {
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

const CommodityChart: React.FC<CommodityChartProps> = ({ data }) => {
    return <Line data={data} />;
};

export default CommodityChart;