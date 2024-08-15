// ~/app/livestock/[id].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { LiveStockItem } from '~/app/global/types/livestock';
import useLiveStockRequest from '~/app/global/hooks/requests/useLiveStockRequest';

const LiveStockDetails = () => {
    const router = useRouter();
    const { id } = router.query; // Get the dynamic route parameter
    const { liveStock, fetchLiveStock } = useLiveStockRequest();
    const [item, setItem] = useState<LiveStockItem | undefined>();

    useEffect(() => {
        fetchLiveStock();
    }, []);

    useEffect(() => {
        if (id && liveStock.length > 0) {
            const foundItem = liveStock.find((item) => item.id === id);
            setItem(foundItem);
        }
    }, [id, liveStock]);

    if (!item) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <p className="mt-4">Latest Price: {item.latestPrice.toLocaleString()}</p>
            <p className={`mt-2 ${item.percentageChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {item.percentageChange.toFixed(1)}% ({item.priceChange.toLocaleString()})
            </p>
        </div>
    );
};

export default LiveStockDetails;
