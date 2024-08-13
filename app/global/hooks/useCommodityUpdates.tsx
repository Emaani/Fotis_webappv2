import { useState } from 'react';

export const useCommodityUpdates = () => {
    const [updates] = useState([
        { title: 'Wheat Prices Surge', description: 'Wheat prices have increased by 5% due to recent drought.' },
        { title: 'Corn Production Hits Record', description: 'Corn production has reached an all-time high this season.' },
        { title: 'Soybean Export Decline', description: 'Soybean exports have dropped by 10% due to trade tensions.' },
        // Add more updates as needed
    ]);

    return updates;
};
