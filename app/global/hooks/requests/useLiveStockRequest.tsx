// ~/app/global/hooks/requests/useLiveStockRequest.ts

import { useState } from 'react';
import { LiveStockItem } from '~/app/global/types/livestock';

const initialLiveStockData: LiveStockItem[] = [
    {
        id: 'cattle-beef',
        name: 'Cattle (Beef)',
        latestPrice: 15000,
        priceChange: 100,
        percentageChange: 0.67,
    },
    {
        id: 'pork-lean',
        name: 'Pork (Lean)',
        latestPrice: 20000,
        priceChange: -150,
        percentageChange: -0.75,
    },
];

export const useLiveStockRequest = () => {
    const [liveStock, setLiveStock] = useState<LiveStockItem[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLiveStock = async () => {
        setIsFetching(true);
        setError(null);
        try {
            // Simulate an API call with hardcoded data
            setTimeout(() => {
                setLiveStock(initialLiveStockData);
                setIsFetching(false);
            }, 1000); // Simulated delay
        } catch (e) {
            setError('Failed to fetch live stock data.');
            setIsFetching(false);
        }
    };

    return {
        liveStock,
        isFetching,
        error,
        fetchLiveStock,
    };
}
