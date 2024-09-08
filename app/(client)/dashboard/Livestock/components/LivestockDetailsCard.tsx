"use client";

import React from "react";

interface Livestock {
    id: number;
    name: string;
    price: number;
    change: number;
    percentageChange: number;
}

const LivestockDetailsCard: React.FC<{ livestock?: Livestock }> = ({ livestock }) => {
    if (!livestock) {
        return <div className="border p-4 rounded-lg shadow">No livestock data available</div>;
    }

    return (
        <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{livestock.name}</h2>
            <p className={`text-${livestock.change >= 0 ? "green" : "red"}-500`}>
                {livestock.price} {livestock.change >= 0 ? "↑" : "↓"}
            </p>
            <p className={`text-${livestock.change >= 0 ? "green" : "red"}-500`}>
                {livestock.percentageChange}% {livestock.change >= 0 ? `+${livestock.change}` : livestock.change}
            </p>
        </div>
    );
};

export default LivestockDetailsCard;
