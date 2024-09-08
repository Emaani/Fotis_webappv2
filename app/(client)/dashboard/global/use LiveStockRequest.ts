import { useState, useEffect } from 'react';

const hardcodedLiveStock = [
    {
        id: 1,
        name: 'Cattle',
        latestPrice: 800,
        percentageChange: 0.5,
        priceChange: 4,
    },
    {
        id: 2,
        name: 'Sheep',
        latestPrice: 450,
        percentageChange: -1.1,
        priceChange: -5,
    },
    // Add more hardcoded livestock data as needed
];

const useLiveStockRequest = () => {
    const [liveStock, setLiveStock] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsFetching(true);
        try {
            // Simulating a delay to mimic data fetching
            setTimeout(() => {
                setLiveStock(hardcodedLiveStock);
                setIsFetching(false);
            }, 1000);
        } catch (err) {
            setError('Failed to load livestock data');
            setIsFetching(false);
        }
    }, []);

    return { liveStock, isFetching, error };
};

export default useLiveStockRequest;
