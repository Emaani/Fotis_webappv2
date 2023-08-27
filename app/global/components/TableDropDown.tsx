"use client";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
type selectableItem = {
    title: string,
    onClick?: () => void,
    url?: string,
}
type TypeProps = {
    labelClass: string,
    items: selectableItem[]
}
const TableDropDown = ({ labelClass, items }: TypeProps) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [label, setLabel] = useState("This Month")
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropDown(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [])
    return (
        <>
            <div ref={dropdownRef}>
                <button onClick={() => setShowDropDown(!showDropDown)} className={labelClass + " cursor-pointer flex"} >
                    <span className="">action</span>
                    <span className=" font-medium">
                        <FontAwesomeIcon className="ml-1" icon={faAngleDown} />
                    </span>
                </button>
                <div className={!showDropDown ? 'hidden' : '' + 'z-50 absolute min-w-[10rem] text-base list-none bg-white shadow-2xl py-1 mt-1 right-10 border rounded overflow-y-auto'} >
                    <ul className="">
                        {
                            items.map((item: selectableItem, key) => {
                                if (item.onClick) {
                                    return <li key={key} onClick={() => {
                                        item.onClick && item.onClick()
                                        setShowDropDown(!showDropDown)
                                    }} className="nav-dropdown-item text-sm"> <span>{item.title}</span> </li>
                                } else if (item.url) {
                                    return <Link key={key} href={item.url} > 
                                    <li className="nav-dropdown-item text-sm" >
                                        <span>{item.title}</span>
                                    </li>
                                    </Link>
                                } else {
                                    return <li className="nav-dropdown-item text-sm" key={key}>
                                        <Link href="" > <span>{item.title}</span> </Link>
                                    </li>
                                }
                            }
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TableDropDown