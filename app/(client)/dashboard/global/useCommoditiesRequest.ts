import { useState, useEffect } from 'react';

const hardcodedCommodities = [
    {
        id: 1,
        name: 'Wheat',
        latestPrice: 320,
        percentageChange: 1.2,
        priceChange: 4,
    },
    {
        id: 2,
        name: 'Corn',
        latestPrice: 150,
        percentageChange: -0.8,
        priceChange: -1.2,
    },
    // Add more hardcoded commodities as needed
];

const useCommoditiesRequest = () => {
    const [commodities, setCommodities] = useState<any[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsFetching(true);
        try {
            // Simulating a delay to mimic data fetching
            setTimeout(() => {
                setCommodities(hardcodedCommodities);
                setIsFetching(false);
            }, 1000);
        } catch (err) {
            setError('Failed to load commodities');
            setIsFetching(false);
        }
    }, []);

    return { commodities, isFetching, error };
};

export default useCommoditiesRequest;
