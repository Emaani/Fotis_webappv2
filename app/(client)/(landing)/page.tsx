"use client";
import { faShop, faTruck, faHammer, faWarehouse, faSearch, faCaretUp, faCaretDown, faArrowUp, faArrowDown, faArrowDownShortWide, faArrowUpWideShort, faSortAmountUp, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AgroProducts from '../shop/AgroProducts'
import LandingSideBar from './LandingSideBar'
import SmallChat from '~/app/global/components/SmallChart'
import { useRouter } from 'next/navigation'

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

    const data = [
        {
            name: "Coffee per kg",
            change: "+200",
            percentage: 0.45,
            data: [18, 20, 20, 17, 15, 16, 19],
            color: "#93cd35",
            sell: "20000",
            buy: "21000"
        },
        {
            name: "Livestock cattle per head",
            change: "+1000",
            percentage: 3,
            data: [30, 50, 45, 50, 60, 70, 85],
            color: "#93cd35",
            sell: "1500000",
            buy: "1600000"
        },
        {
            name: "Maize 100 kg",
            change: "-30",
            percentage: -0.15,
            data: [12, 8, 8, 7, 9, 10, 11],
            color: "#dc2626",
            sell: "5000",
            buy: "5200"
        },
        {
            name: "G.Nuts 100 kg",
            change: "-70",
            percentage: -0.3,
            data: [20, 18, 17, 18, 19, 20, 15],
            color: "#dc2626",
            sell: "7000",
            buy: "7500"
        },
        {
            name: "Rice 100 kg",
            change: "+100",
            percentage: 1.5,
            data: [13, 14, 12, 16, 20, 25, 31],
            color: "#93cd35",
            sell: "10000",
            buy: "12000"
        },
        {
            name: "Eggs per tray",
            change: "+100",
            percentage: 0.1,
            data: [20, 21, 21, 21, 21, 22, 32],
            color: "#93cd35",
            sell: "12000",
            buy: "13500"
        },
        {
            name: "Corn futures main",
            change: "-25",
            percentage: -0.3,
            data: [20, 18, 17, 18, 19, 20, 15],
            color: "#dc2626",
            sell: "450",
            buy: "7500"
        },
        {
            name: "Soya beans oil future",
            change: "+230",
            percentage: 0.1,
            data: [20, 21, 21, 21, 21, 22, 32],
            color: "#93cd35",
            sell: "12000",
            buy: "100000"
        }

    ]
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
                    data.map((item, key) =>
                        <div onClick={()=> router.push("/market")} className='card rounded-none shadow-lg hover:shadow-2xl cursor-pointer' key={key}>
                            <div className='card-body py-4 px-4'>
                                <p className=''>{item.name}</p>
                                <div className={`flex mt-2 gap-1 ${item.percentage>0?'text-green-600':"text-red-600"}`}>
                                    <p className={` text-lg`}>{parseFloat(item.buy).toLocaleString()}</p>
                                    <p className='flex flex-col justify-center '> 
                                    {
                                        item.percentage>0?
                                        <FontAwesomeIcon width={10} icon={faArrowUp}/>:
                                        <FontAwesomeIcon width={10} icon={faArrowDown}/>
                                    }
                                    </p>
                                    
                                </div>
                                <div className={`flex mt-1 gap-1 ${item.percentage>0?'text-green-600':"text-red-600"}`}>
                                    <p className='text-xs'>{item.percentage}%  {item.change}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>


           
        </>
    )
}