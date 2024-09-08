// CommodityDetailsCard.tsx
"use client";

import React from "react";

interface Commodity {
    id: number;
    name: string;
    price: number;
    change: number;
    percentageChange: number;
}

const CommodityDetailsCard: React.FC<{ commodity?: Commodity }> = ({ commodity }) => {
    if (!commodity) {
        return <div className="border p-4 rounded-lg shadow">No data available</div>;
    }

    return (
        <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{commodity.name}</h2>
            <p className={`text-${commodity.change >= 0 ? "green" : "red"}-500`}>
                {commodity.price} {commodity.change >= 0 ? "↑" : "↓"}
            </p>
            <p className={`text-${commodity.change >= 0 ? "green" : "red"}-500`}>
                {commodity.percentageChange}% {commodity.change >= 0 ? `+${commodity.change}` : commodity.change}
            </p>
        </div>
    );
};

export default CommodityDetailsCard;
