"use client";
import Link from "next/link";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import personIcon from "../../assets/img/profile.ea4f1c2e.svg"
import AppSpinner from "@/global/components/AppSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faLandmark, faLeaf, faShop, faShoppingCart, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";
import LogoSection from "../LogoSection";

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
                    <div className={(isMinimized ? "w-[5rem]" : " w-[17rem]") + " border-r fixed z-50  bg-prim-color bg-opacity-95  h-screen flex flex-col "}>
                        <LogoSection isMinimized={isMinimized} toggleWidth={(value) => setIsMinimized(value)} />
                        <div className=" flex flex-col flex-grow pt-5">
                            <SideItems isMinimized={isMinimized} />
                        </div>
                    </div>
                    <div className={"w-screen sm:min-w-laptop sm:max-w-laptop md:min-w-laptop md:max-w-laptop lg:min-w-laptop lg:max-w-full xl:min-w-full xl:max-w-full  overflow-auto min-h-screen bg-gray-50 " + (isMinimized ? "ml-[5rem]" : "ml-[17rem]")}>
                        <div className="h-[90px] border-b flex  px-edge-space bg-white">
                            <div className=" flex-grow flex flex-col justify-center h-full">
                                <p className="">Buyer/Seller</p>
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <MyAccountSection/>
                            </div>
                        </div>
                        <div className="px-edge-space pb-edge-space pt-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MyAccountSection = () => {
    const [showDropDown, setShowDropDown] = useState(false)
  
    return (
      <>
        <span onClick={() => setShowDropDown(!showDropDown)} className=" hover:bg-green-600 border border-gray-200 cursor-pointer rounded-md flex justify-center h-8">
          <Image className="w-5" src={personIcon} alt="" />
        </span>
        <div className={!showDropDown ? 'hidden' : '' + 'z-50 right-4 border absolute min-w-[13rem] rounded min-h-[80px] text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-8 overflow-y-auto'} >
          <ul className="">
            <li  className="nav-dropdown-item text-sm text-gray-600 font-normal"> <span>Logout</span> </li>
          </ul>
        </div>
      </>
    )
  }
  

const SideItems = ({ isMinimized }: { isMinimized: boolean }) => {
    const pathname = usePathname();
    const isActiveLink = (paths: string[]): string => {
        for (const to of paths) {
            const isActive = pathname.startsWith(to);
            if (isActive) {
                return "active";
            }
        }
        return "";
    };
    const [showOtherBusiness, setShowOtherBusiness] = useState(false)
    const [navLink, setNavLink] = useState("nav-link")
    const [navTitle, setNavTitle] = useState("nav-title")
    useEffect(() => {
        if (isMinimized) {
            setNavLink("nav-link  flex justify-center")
            setNavTitle("hidden")
        } else {
            setNavLink("nav-link pl-5")
            setNavTitle("nav-title")
        }
    }, [isMinimized, navTitle])

    return (
        <ul className=" ">
            <li>
                <Link className={navLink + " " + (isActiveLink(["/home"]))} href="/home" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faLandmark} />
                        </span>
                        <span className={navTitle}>Overview</span>
                    </span>
                </Link>
            </li>



            <li>
                <Link className={navLink} href="" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faLeaf} />
                        </span>
                        <span className={navTitle}>My Inventory</span>
                    </span>
                </Link>
            </li>

            <li>
                <Link className={navLink} href="" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faShop} />
                        </span>
                        <span className={navTitle}>Sell Inventory</span>
                    </span>
                </Link>
            </li>

            <li>
                <Link className={navLink} href="" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <span className={navTitle}>Orders</span>
                    </span>
                </Link>
            </li>

            {/* <li>
                <Link className={navLink} href="" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faList} />
                        </span>
                        <span className={navTitle}>Transactions</span>
                    </span>
                </Link>
            </li> */}

            <li>
                <Link className={navLink} href="" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faWallet} />
                        </span>
                        <span className={navTitle}>Wallet</span>
                    </span>
                </Link>
            </li>

    
            <li>
                <Link className={navLink + " " + (isActiveLink(["/users"]))} href="users" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faUsers} />
                        </span>
                        <span className={navTitle}>Account Settings</span>
                    </span>
                </Link>
            </li>
        </ul>
    );
}


