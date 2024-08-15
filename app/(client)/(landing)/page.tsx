"use client";

import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCommoditiesRequest from '~/app/global/hooks/requests/useCommoditiesRequest';
import { useLiveStockRequest } from '~/app/global/hooks/requests/useLiveStockRequest';
import { getLatestPriceInfo } from '~/app/global/utils/helpers/commodities_helper'; // Importing the helper function
import Sidebar from '~/app/global/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
            <div className="flex flex-col min-h-screen">
                <header className="bg-dark-blue text-white p-4">
                </header>
                <main className="flex-grow container mx-auto px-4 py-8 flex">
                    <div className="w-3/4 pr-6">
                        <CommoditiesSection />
                        <LiveStockSection />
                    </div>
                    <div className="w-1/5">
                        <Sidebar />
                    </div>
                </main>
            </div>
        );
    }

const CommoditiesSection = () => {
    const router = useRouter();
    const { fetchCommodities, commodities, isFetching, error } = useCommoditiesRequest();

    useEffect(() => {
        fetchCommodities();
    }, []);

    // Debugging: Check if commodities data is fetched correctly
    useEffect(() => {
        console.log("Fetched Commodities:", commodities);
    }, [commodities]);

    if (isFetching) return <p>Loading commodity prices...</p>;
    if (error) return <p>Error loading commodities: {error}</p>;
    if (!commodities || commodities.length === 0) return <p>No commodities available</p>;

    return (
        <>
            <div className="flex mb-4 mt-6">
                <div className="flex flex-col justify-center flex-grow">
                    <span className='text-xl font-semibold'>Commodity Prices</span>
                </div>
            </div>

            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                {commodities.map((item, key) => {
                    const latestPriceInfo = getLatestPriceInfo(item);  // Using the helper function
                    const isPriceUp = latestPriceInfo.percentageChange > 0;

                    return (
                        <Link key={key} href={`/commodity/${item.id}`}>
                            <div className='card rounded-none shadow-lg hover:shadow-2xl cursor-pointer'>
                                <div className='card-body py-4 px-4'>
                                    <p>{item.name || 'Unknown Commodity'}</p>
                                    <div className={`flex mt-2 gap-1 ${isPriceUp ? 'text-green-600' : "text-red-600"}`}>
                                        <p className='text-lg'>{latestPriceInfo.latestPrice.toLocaleString()}</p>
                                        <p className='flex flex-col justify-center'>
                                            <FontAwesomeIcon width={10} icon={isPriceUp ? faArrowUp : faArrowDown} />
                                        </p>
                                    </div>
                                    <div className={`flex mt-1 gap-1 ${isPriceUp ? 'text-green-600' : "text-red-600"}`}>
                                        <p className='text-xs'>{latestPriceInfo.percentageChange.toFixed(1)}%  {latestPriceInfo.priceChange.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

const LiveStockSection = () => {
    const { fetchLiveStock, liveStock, isFetching, error } = useLiveStockRequest();

    useEffect(() => {
        fetchLiveStock();
    }, []);

    if (isFetching) return <p>Loading live stock data...</p>;
    if (error) return <p>Error loading live stock data: {error}</p>;
    if (!liveStock || liveStock.length === 0) return <p>No live stock data available</p>;

    return (
        <>
            <div className="flex mb-4 mt-6">
                <div className="flex flex-col justify-center flex-grow">
                    <span className='text-xl font-semibold'>Live Stock Commodities</span>
                </div>
            </div>

            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                {liveStock.map((item, key) => {
                    const isPriceUp = item.percentageChange > 0;

                    return (
                        <Link key={key} href={`/livestock/${item.id}`}>
                            <div className='card rounded-none shadow-lg hover:shadow-2xl cursor-pointer'>
                                <div className='card-body py-4 px-4'>
                                    <p>{item.name || 'Unknown Commodity'}</p>
                                    <div className={`flex mt-2 gap-1 ${isPriceUp ? 'text-green-600' : "text-red-600"}`}>
                                        <p className='text-lg'>{(item.latestPrice || 0).toLocaleString()}</p>
                                        <p className='flex flex-col justify-center'>
                                            <FontAwesomeIcon width={10} icon={isPriceUp ? faArrowUp : faArrowDown} />
                                        </p>
                                    </div>
                                    <div className={`flex mt-1 gap-1 ${isPriceUp ? 'text-green-600' : "text-red-600"}`}>
                                        <p className='text-xs'>{(item.percentageChange || 0).toFixed(1)}%  {(item.priceChange || 0).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
