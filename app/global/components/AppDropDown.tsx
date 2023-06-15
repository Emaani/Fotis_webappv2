"use client";

import { useState } from "react";
type selectableItem = {
    title: string,
    value: string,
}
type TypeProps = {
    labelClass: string,
    onSelected: (item: selectableItem) => void
    items: selectableItem[]
}
const AppDropDown = ({ labelClass, items,onSelected }: TypeProps) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [label,setLabel]= useState("This Month")
    return (
        <>
            <div>
                <span onClick={() => setShowDropDown(!showDropDown)} className={labelClass + " cursor-pointer"} >{label}

                </span>
                <div className={!showDropDown ? 'hidden' : '' + 'z-50 absolute min-w-[15rem] text-base list-none bg-white shadow-2xl py-1 mt-1 h-72 overflow-y-auto'} >
                    <ul className="">
                        {
                            items.map((item: selectableItem,key) =>
                                <li key={key} onClick={()=>{
                                    onSelected(item)
                                    setLabel(item.title)
                                    setShowDropDown(!showDropDown)
                                }} className="nav-dropdown-item text-sm"> <span>{item.title}</span> </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AppDropDown