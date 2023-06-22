import { faShop, faTruck, faHammer, faWarehouse, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AgroProducts from '../agro-products/AgroProducts'
import LandingSideBar from './LandingSideBar'

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
                            <div className="flex mb-4">
                                <div className=" flex flex-col justify-center flex-grow">
                                    <span className=''>Agro Products</span>
                                </div>
                                <div className="w-1/4">
                                    <SearchInput />
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
