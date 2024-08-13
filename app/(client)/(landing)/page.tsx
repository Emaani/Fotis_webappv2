"use client";

import { faShop, faHammer, faWarehouse, faCaretDown, faArrowUp, faArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCommoditiesRequest from '~/app/global/hooks/requests/useCommoditiesRequest';
import { getLatestPriceInfo } from '~/app/global/utils/helpers/commodities_helper';
import Sidebar from '~/app/global/Sidebar';
export default function Home() {
    return (
        
                <>
                    <section className='horizontal-padding flex'>
                        <div className="flex-grow">
                            <CommoditiesSection />
                        </div>
                        <Sidebar/>
            </section>
        </>
    );
}

const SearchInput = () => {
    return (
        <div className="relative">
            <input type="text" className="form-input-1 rounded py-2.5" placeholder="Search commodities..." />
            <span className="absolute h-full top-0 right-0 flex flex-col justify-center px-2 opacity-70">
                <FontAwesomeIcon width={13} icon={faSearch} />
            </span>
        </div>
    );
};

const CommoditiesSection = () => {
    const router = useRouter();
    const { fetchCommodities, isFetching, commodities, error } = useCommoditiesRequest();

    useEffect(() => {
        fetchCommodities();
    }, []);

    return (
        <>
            <div className="flex mb-4 mt-6">
                <div className="flex flex-col justify-center flex-grow">
                    <span className='text-xl font-semibold'>Commodity Prices</span>
                </div>
                <div className="w-1/4">
                    {/* <SearchInput /> */}
                </div>
            </div>

            <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                {commodities.map((item, key) => {
                    const latestPriceInfo = getLatestPriceInfo(item);
                    const isPriceUp = latestPriceInfo.percentageChange > 0;

                    return (
                        <Link key={key} href={`/commodity/${item.id}`}>
                            <div className='card rounded-none shadow-lg hover:shadow-2xl cursor-pointer'>
                                <div className='card-body py-4 px-4'>
                                    <p>{item.name}</p>
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
