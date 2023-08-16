"use client";
import { faShop, faTruck, faHammer, faWarehouse, faSearch, faCaretUp, faCaretDown, faArrowUp, faArrowDown, faArrowDownShortWide, faArrowUpWideShort, faSortAmountUp, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AgroProducts from '../shop/AgroProducts'
import LandingSideBar from './LandingSideBar'
import SmallChat from '~/app/global/components/SmallChart'
import { useRouter } from 'next/navigation'
import useCommoditiesRequest from '~/app/global/hooks/requests/useCommoditiesRequest';
import { useEffect } from 'react';
import { getLatestPriceInfo } from '~/app/global/utils/helpers/commodities_helper';

export default function Home() {
    return (
        <>
            <section className='horizontal-padding'>
                <CommoditiesSection />
            </section>
        </>
    )
}

const SearchInput = () => {
    return (
        <>
            <div className=" relative">
                <input type="text" className="form-input-1 rounded py-2.5" />
                <span className=" absolute h-full  top-0 right-0 flex flex-col justify-center px-2 opacity-70">
                    <FontAwesomeIcon width={13} icon={faSearch} />
                </span>
            </div>
        </>
    )
}


const CommoditiesSection = () => {
    const router = useRouter();
    const { fetchCommodities, isFetching,commodities } = useCommoditiesRequest()
    useEffect(() => {
        fetchCommodities()
    }, [])

    return (
        <>
            <div className="flex mb-4 mt-6">
                <div className=" flex flex-col justify-center flex-grow">
                    <span className='text-xl font-semibold'>Commodity Prices</span>
                </div>
                <div className="w-1/4">
                    <SearchInput />
                </div>
            </div>

            <div className=' grid grid-cols-4 gap-5'>
                {
                    commodities.map((item, key) =>
                        <div onClick={()=> router.push("/market")} className='card rounded-none shadow-lg hover:shadow-2xl cursor-pointer' key={key}>
                            <div className='card-body py-4 px-4'>
                                <p className=''>{item.name}</p>
                                <div className={`flex mt-2 gap-1 ${getLatestPriceInfo(item).percentageChange>0?'text-green-600':"text-red-600"}`}>
                                    <p className={` text-lg`}>{ getLatestPriceInfo(item).latestPrice.toLocaleString()}</p>
                                    <p className='flex flex-col justify-center '> 
                                    {
                                        getLatestPriceInfo(item).percentageChange>0?
                                        <FontAwesomeIcon width={10} icon={faArrowUp}/>:
                                        <FontAwesomeIcon width={10} icon={faArrowDown}/>
                                    }
                                    </p>
                                </div>
                                <div className={`flex mt-1 gap-1 ${getLatestPriceInfo(item).percentageChange>0?'text-green-600':"text-red-600"}`}>
                                    <p className='text-xs'>{ getLatestPriceInfo(item).percentageChange.toFixed(1)}%  { getLatestPriceInfo(item).priceChange}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>


           
        </>
    )
}