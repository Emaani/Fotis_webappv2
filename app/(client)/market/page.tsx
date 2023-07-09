"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import AgroSuppliers from "./AgroSuppliers";
export default function Market() {
    return (
        <>

            <section className='horizontal-padding'>
                <div className='mt-6 mb-10'>
                    <div className="flex mb-4">
                        <div className=" flex flex-col justify-center flex-grow">
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700  hover:text-prim-green ">
                                            Market
                                        </a>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg aria-hidden="true" className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Coffee</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="w-1/3">
                            <SearchInput />
                        </div>
                    </div>

                    <div className=" mt-6">
                        <AgroSuppliers />
                    </div>


                </div>
            </section>
        </>
    )
}



const SearchInput = () => {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <>
            <div className="flex justify-end w-full">
                {/* <button onClick={() => setShowDropDown(!showDropDown)} type="button" className=" bg-gray-50 rounded-l h-auto px-2 flex flex-col justify-center w-1/3 hover:bg-gray-200">
                    <span className="text-center flex gap-1">
                        <span className="text-sm">Categories</span>
                        <span className="flex flex-col justify-center">
                            <FontAwesomeIcon width={10} icon={showDropDown ? faAngleUp : faAngleDown} />
                        </span>
                    </span>
                </button> */}
                <div className=" relative w-2/3">
                    <input type="text" className="form-input-1 py-2.5" />
                    <span className="absolute h-full top-0 right-0 flex flex-col justify-center px-2 opacity-70">
                        <FontAwesomeIcon width={15} icon={faSearch} />
                    </span>
                </div>
            </div>

            <div className={!showDropDown ? 'hidden' : '' + 'z-50  border absolute min-w-[15rem] max-h-[300px] pb-4 text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-1 overflow-y-auto'} >
                <ul className="">
                    <li className="nav-dropdown-item text-sm"> <span>Coffee</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Livestock</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Insecticides</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Grains</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Vegetable</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Herbicides</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Fodder & Feed Additives</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Cereals</span> </li>


                </ul>
            </div>
        </>
    )
}