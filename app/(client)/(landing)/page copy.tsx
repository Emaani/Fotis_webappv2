import { faShop, faTruck, faHammer, faWarehouse, faSearch, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AgroProducts from '../shop/AgroProducts'
import LandingSideBar from './LandingSideBar'
import SmallChat from '~/app/global/components/SmallChart'

export default function Home() {
    return (
        <>
            <section className='horizontal-padding'>
                <div className=' '>
                    <div className='mt-10 grid grid-cols-5 gap-4'>
                        <div className=" col-span-1 " >
                            <LandingSideBar />
                        </div>
                        <div className=" col-span-4  ">
                            <div className='card rounded-none shadow-lg border-none'>
                                <div className='card-body'>
                                    <CommoditiesSection />
                                </div>
                            </div>

                            <div className="flex mb-4 mt-20">
                                <div className=" flex flex-col justify-center flex-grow">
                                    <span className=''>Agro Products</span>
                                </div>
                                <div className="w-1/4">
                                    {/* <SearchInput /> */}
                                </div>
                            </div>
                            <AgroProducts />
                        </div>
                    </div>
                </div>
            </section>

            <section className='horizontal-padding py-32'>
                <div className=" bg-prim-green shadow-xl border-0 bg-opacity-50 text-white  rounded-lg p-8 md:p-12 mb-8">

                    <h1 className="text-gray-900 dark:text-white text-2xl md:text-5xl font-extrabold mb-2">Become a partner</h1>
                    <p className=" font-normal text-gray-600 mb-4">Are you interested in selling agro products, offering transport services, providing warehouse services, or auctioning your livestock? Register below.</p>
                    <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-prim-green hover:bg-green-800 focus:ring-4 focus:ring-prim-green ">
                        Get started
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </section>

        </>
    )
}

const SearchInput = () => {
    return (
        <>
            <div className=" relative">
                <input type="text" className="form-input-1 rounded-none" />
                <span className=" absolute h-full  top-0 right-0 flex flex-col justify-center px-2 opacity-70">
                    <FontAwesomeIcon width={13} icon={faSearch} />
                </span>
            </div>
        </>
    )
}


const CommoditiesSection = () => {
    const data = [
        {
            name: "Coffee",
            change: "200",
            percentage: 0.45,
            data: [18, 20, 20, 17, 15, 16, 19],
            color: "#93cd35",
            sell: "20,000",
            buy: "21,000"
        },
        {
            name: "Livestock",
            change: "1000",
            percentage: 3,
            data: [30, 50, 45, 50, 60, 70, 85],
            color: "#93cd35",
            sell: "1500000",
            buy: "1600000"
        },
        {
            name: "Maize",
            change: "30",
            percentage: -0.15,
            data: [12, 8, 8, 7, 9, 10, 11],
            color: "#dc2626",
            sell: "5000",
            buy: "5200"
        },
        {
            name: "G.Nuts",
            change: "70",
            percentage: -0.3,
            data: [20, 18, 17, 18, 19, 20, 15],
            color: "#dc2626",
            sell: "7000",
            buy: "7500"
        },
        {
            name: "Rice",
            change: "100",
            percentage: 1.5,
            data: [13, 14, 12, 16, 20, 25, 31],
            color: "#93cd35",
            sell: "10000",
            buy: "12000"
        },
        {
            name: "Eggs",
            change: "100",
            percentage: 0.1,
            data: [20, 21, 21, 21, 21, 22, 32],
            color: "#93cd35",
            sell: "12000",
            buy: "13500"
        }

    ]
    return (
        <>
            <div className="flex mb-4">
                <div className=" flex flex-col justify-center flex-grow">
                    <span className=''>Commodity Prices</span>
                </div>
                <div className="w-1/4">
                    <SearchInput />
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2 mb-4">
                <thead>
                    <tr>
                        <th scope="col">Market</th>
                        <th scope="col">Change</th>
                        <th scope="col">Trend</th>
                        <th scope="col">Sell</th>
                        <th scope="col">Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, key) =>
                            <tr>
                                <td className=''>{item.name}</td>
                                <td className=' '>
                                    <span className={`${item.percentage > 0 ? 'text-prim-green-2 ' : 'text-red-600'} max-w-[60px] flex gap-[4px]`}>
                                        <span>{item.change}</span>
                                        <span className='flex'> (<FontAwesomeIcon width={10} icon={item.percentage > 0 ? faCaretUp : faCaretDown} />
                                            <span className=''>{item.percentage}%</span>)</span>
                                    </span>
                                </td>
                                <td className=' max-w-[60px]'>
                                    <div className=' max-h-7'>
                                        <SmallChat containerId={item.name} color={item.color} data={item.data} />
                                    </div>
                                </td>
                                <td className=''>
                                    <span className='w-full flex'>
                                        <span className=' bg-prim-color px-2 py-1 text-white'>S</span>
                                        <span className='bg-gray-100 py-1 flex-grow text-end px-2'>{item.sell}</span>
                                    </span>
                                </td>
                                <td className=''>
                                    <span className='flex w-full'>
                                        <span className=' bg-prim-color px-2 py-1 text-white'>B</span>
                                        <span className='bg-gray-100 py-1 flex-grow text-end px-2'>{item.buy}</span>
                                    </span>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
    )
}