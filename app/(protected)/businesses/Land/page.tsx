// Land.tsx
"use client";

import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AppSpinner from "@/global/components/AppSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLandmark, faList, faShop, faUsers, faVcard, faWallet } from "@fortawesome/free-solid-svg-icons";
import LogoSection from "~/app/(protected)/LogoSection";
import Header from "~/app/global/components/header";
import Sidebar from "~/app/global/Sidebar";

const Layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (<MainLayout >{children} </MainLayout>)
}

export default Layout;

const MainLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isMinimized, setIsMinimized] = useState(false)
    return (
        <div className="">
            <div className=" h-max">
                <div className="flex h-full ">
                    <div className={(isMinimized ? "w-[5rem]" : " w-[17rem]") + " border-r fixed z-50 bg-prim-color bg-opacity-95 h-screen flex flex-col "}>
                        <LogoSection isMinimized={isMinimized} toggleWidth={(value) => setIsMinimized(value)} />
                        <div className=" flex flex-col flex-grow pt-5">
                            <SideItems isMinimized={isMinimized} />
                        </div>
                    </div>
                    <div className={"w-screen sm:min-w-laptop sm:max-w-laptop md:min-w-laptop md:max-w-laptop lg:min-w-laptop lg:max-w-full xl:min-w-full xl:max-w-full overflow-auto min-h-screen bg-gray-50 " + (isMinimized ? "ml-[5rem]" : "ml-[17rem]")}>
                        <div className="h-[90px] border-b flex  px-edge-space bg-white">
                            <div className="flex-grow flex items-center">
                                <p className="text-2xl font-bold text-gray-700">Land</p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <Header />
                            </div>
                        </div>
                        <div className="w-full bg-opacity-30">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SideItems = ({ isMinimized }) => {
    return (
        <ul className="space-y-1 flex-grow pl-0">
            <li className="flex">
                <SideBarItem icon={faWallet} isMinimized={isMinimized} label={"Account"} />
            </li>
            <li className="flex">
                <SideBarItem icon={faList} isMinimized={isMinimized} label={"Orders"} />
            </li>
            <li className="flex">
                <SideBarItem icon={faLandmark} isMinimized={isMinimized} label={"Land"} />
            </li>
            <li className="flex">
                <SideBarItem icon={faUsers} isMinimized={isMinimized} label={"Teams"} />
            </li>
            <li className="flex">
                <SideBarItem icon={faVcard} isMinimized={isMinimized} label={"Contracts"} />
            </li>
            <li className="flex">
                <SideBarItem icon={faShop} isMinimized={isMinimized} label={"Market"} />
            </li>
            <li className="flex">
                <div className="px-3 w-full flex items-center cursor-pointer hover:text-prim-orange text-white py-2 hover:bg-gray-600 duration-300" onClick={() => { }}>
                    <FontAwesomeIcon icon={faAngleDown} className={(isMinimized ? "w-full text-center" : " text-[1.2rem] text-gray-200 ")} />
                    <span className={(isMinimized ? " hidden " : "ml-5 text-[1.1rem] font-bold flex-grow")}>More</span>
                </div>
            </li>
        </ul>
    )
}

const SideBarItem = ({ icon, isMinimized, label }) => {
    const currentPath = usePathname()
    return (
        <Link href={`/${label.toLowerCase()}`} className={`px-3 flex items-center w-full text-sm cursor-pointer duration-300 hover:bg-prim-green hover:text-white text-gray-100 py-2 ${currentPath.includes(label.toLowerCase()) ? "bg-gray-600" : "hover:bg-gray-600"}`}>
            <FontAwesomeIcon icon={icon} className={`text-[1.2rem] ${isMinimized ? "w-full text-center" : " text-gray-200 "}`} />
            <span className={`${isMinimized ? " hidden " : "ml-5 text-[1.1rem] font-bold flex-grow"}`}>{label}</span>
        </Link>
    )
}
