
import coffeeImage from "@/assets/img/Green-Coffee-Beans.jpg"
import DairyCowImage from "@/assets/img/Dairy-Cow.jpg"
import RiceImage from "@/assets/img/Rice-781.jpg"


import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
export default function AgroProducts() {
    return (
        <>

            <section className='horizontal-padding'>
                <div className=' py-8'>

                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700  hover:text-prim-green ">
                                    <svg aria-hidden="true" className="w-2 h-2 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    Home
                                </a>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Agro products</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className='mt-10 grid grid-cols-8 gap-6'>
                        <div className=" col-span-2 " >
                            <div className=" min-h-[500px] bg-gray-50 bg-opacity-70">
                                <div className="  px-3 py-3">
                                    <h1 className=" font-semibold">Categories</h1>
                                </div>
                                <hr />
                                <div className="flex flex-col">
                                    <ul className="categories-list">
                                        <li>Coffee</li>
                                        <li>Tea</li>
                                        <li>Livestock</li>
                                        <li>Rice</li>
                                        <li>Eggs</li>
                                        <li>Beans</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" col-span-6">
                            <div className="flex mb-4">
                                <div className=" flex flex-col justify-center flex-grow">
                                    All products
                                </div>
                                <div className="w-1/3">
                                    <SearchInput />
                                </div>
                            </div>
                            <div className=" grid grid-cols-3 gap-4">
                                <div className="shadow-sm py-2 border">
                                    <div className=" w-full flex justify-center">
                                        <Image className="h-60 w-auto" src={coffeeImage} alt={""} />
                                    </div>
                                    <div className=" py-2 px-2 border-t mt-3">
                                        <h1 className=" font-medium">Fresh Coffee beans</h1>
                                        <p className=" text-sm font-semibold text-prim-green">UGX 20,000 Per Kg</p>
                                        <p className=" text-sm opacity-80 mt-2">Suplier: Fotis Agro Limitted</p>
                                        <button className="btn-light w-full mt-3 ">Place Order</button>
                                    </div>
                                </div>
                                <div className="shadow-sm py-2 border">
                                    <div className=" w-full flex justify-center">
                                        <Image className="h-60 w-auto" src={RiceImage} alt={""} />
                                    </div>
                                    <div className=" py-2 px-2 border-t mt-3">
                                        <h1 className=" font-medium">Steam Rice Broken</h1>
                                        <p className=" text-sm font-semibold text-prim-green">UGX 20,000 Per Kg</p>
                                        <p className=" text-sm opacity-80 mt-2">Suplier: Kawogo Agro Suppliers</p>
                                        <button className="btn-light w-full mt-3 ">Place Order</button>
                                    </div>
                                </div>
                                <div className="shadow-sm py-2 border">
                                    <div className=" w-full flex justify-center">
                                        <Image className="h-60 w-auto" src={DairyCowImage} alt={""} />
                                    </div>
                                    <div className=" py-2 px-2 border-t mt-3">
                                        <h1 className=" font-medium">Dairy Cow</h1>
                                        <p className=" text-sm font-semibold text-prim-green">UGX 800,000 - 1,5000,000 (Approx) </p>
                                        <p className=" text-sm opacity-80 mt-2">Suplier: Fotis Agro Limitted</p>
                                        <button className="btn-light w-full mt-3 ">Place Order</button>
                                    </div>
                                </div>
                                <div className="shadow-sm py-2 border">
                                    <div className=" w-full flex justify-center">
                                        <Image className="h-60 w-auto" src={RiceImage} alt={""} />
                                    </div>
                                    <div className=" py-2 px-2 border-t mt-3">
                                        <h1 className=" font-medium">Steam Rice Broken</h1>
                                        <p className=" text-sm font-semibold text-prim-green">UGX 20,000 Per Kg</p>
                                        <p className=" text-sm opacity-80 mt-2">Suplier: Kawogo Agro Suppliers</p>
                                        <button className="btn-light w-full mt-3 ">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}



const SearchInput = () => {
    return (
        <>
            <div className=" relative">
                <input type="text" className="form-input-1" />
                <span className=" absolute h-full top-0 right-0 flex flex-col justify-center px-2 opacity-80">
                    <FontAwesomeIcon width={15} icon={faSearch} />
                </span>
            </div>
        </>
    )
}