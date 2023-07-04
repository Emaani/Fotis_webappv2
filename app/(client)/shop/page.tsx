"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faSearch } from "@fortawesome/free-solid-svg-icons"
import AgroProducts from "./AgroProducts"
import { useState } from "react"
export default function AgroProductsPage() {
    return (
        <>

            <section className='horizontal-padding'>
                <div className='mt-6 mb-10'>

                    <div className='mt-10'>

                        <div className="flex mb-4">
                            <div className=" flex flex-col justify-center flex-grow">
                                <span className='text-xl font-semibold'>Agro Products</span>

                            </div>
                            <div className="w-1/3">
                                <SearchInput />
                            </div>
                        </div>
                        <AgroProducts />
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
            <div className="flex w-full">
                <button onClick={()=>setShowDropDown(!showDropDown)} type="button" className=" bg-gray-50 rounded-l h-auto px-2 flex flex-col justify-center w-1/3 hover:bg-gray-200">
                    <span className="text-center flex gap-1">
                        <span className="text-sm">Categories</span>
                        <span className="flex flex-col justify-center"> 
                            <FontAwesomeIcon width={10} icon={showDropDown?faAngleUp:faAngleDown} />
                        </span>
                    </span>
                </button>
                <div className=" relative w-2/3">
                    <input type="text" className="form-input-1 py-2.5 rounded-l-none border-gray-100 rounded-r" />
                    <span className="absolute h-full top-0 right-0 flex flex-col justify-center px-2 opacity-70">
                        <FontAwesomeIcon width={13} icon={faSearch} />
                    </span>
                </div>
            </div>

            <div className={!showDropDown ? 'hidden' : '' + 'z-50  border absolute min-w-[15rem] max-h-[300px] pb-4 text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-1 overflow-y-auto'} >
                <ul className="">
                    <li  className="nav-dropdown-item text-sm"> <span>Coffee</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Livestock</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Insecticides</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Grains</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Vegetable</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Herbicides</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Fodder & Feed Additives</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Cereals</span> </li>


                </ul>
            </div>
        </>
    )
}