"use client";
import Logo from "@/assets/img/logo.png"
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const MainLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const drawerRef = useRef<DrawerFunctions>(null);
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className=" ">
            <nav className=" bg-prim-color border-b pt-4 pb-4 sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:block w-full z-50">
                <div className="horizontal-padding h-full ">
                    <div className="flex flex-row  ">
                        <div className=" h-full">
                            <Image width={75} src={Logo} alt="Fotis Logo" />
                        </div>
                        <div className="flex-grow flex justify-center  ">
                            <Link href="/" className="nav-link">home</Link>
                            <Link href="/about" className="nav-link">about</Link>
                            <Link href="/contact" className="nav-link">Services</Link>
                            <Link href="/contact" className="nav-link">contact</Link>
                            <Link href="/contact" className="nav-link">signup</Link>

                        </div>
                        <div className="flex flex-col justify-end h-auto ">
                            {!loggedIn ?
                                <Link href="/login" type="button" className=" text-black bg-prim-orange hover:bg-prim-green focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center cursor-pointer   ">Sign In</Link>
                                :
                                <div>
                                    <MyAccountSection />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            {/* small nav */}
            <nav className="bg-prim-color sm:block md:block lg:block xl:block 2xl:hidden 3xl:hidden nav-bar fixed w-full z-40">
                <div className=" flex px-edge-space-sm py-5">
                    <div className=" flex-grow">
                        <Image width={80} src={Logo} alt="" />
                    </div>
                    <div className=" flex justify-end ">
                        <div className=" h-full  flex flex-col justify-center">
                            <span onClick={() => drawerRef.current?.openDrawer()}>
                                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#FFFFFF" d="M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z" /></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className=" min-h-screen">
                {children}
            </div>
            <Footer />
            <Drawer ref={drawerRef} />
        </div>
    )
}

export default MainLayout;

export const Footer = () => {
    return (
        <div className=" bg-prim-color border-t-2  pt-20 pb-7 text-white">
            <div className="horizontal-padding">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-4 text-sm">
                    <div className=" pb-5 ">
                        <Image width={80} src={Logo} alt="" />
                        <p className="mt-5">+256 757 220113</p>
                        <p className="mt-3">fotisenterprises@gmail.com</p>
                        <p className="mt-3">10 Bukoto St, Kampala, Uganda <br /></p>
                    </div>
                    <div className=" pb-5 pt-5">
                        <p className=" text-prim-green font-bold mb-3">Company</p>
                        <ul className=" gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/about">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/contact">Contact</Link>
                            </li>
                            <li>
                                <a className="hover:text-prim-green" href="/signup">Register</a>
                            </li>
                        </ul>
                    </div>
                   
                    <div className=" pb-5 pt-5">
                        <p className=" text-prim-green font-bold mb-3">Community</p>
                        <ul className=" gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="/">LinkedIn</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Twitter</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Facebook</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Instagram</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center mt-14 text-sm">© 2022 All rights reserved</p>
            </div>

        </div>
    );
}


export type DrawerFunctions = {
    openDrawer: () => void
}

const MyAccountSection = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [label,setLabel]= useState("This Month")
    return (
        <>
            <div onClick={()=> setShowDropDown(!showDropDown)} className=" flex  gap-2 cursor-pointer">
                <div>
                    <div className="w-5 h-5 bg-prim-orange bg-opacity-90 text-center flex flex-col justify-center rounded-full text-[12px]">
                        MK
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-grow">
                    <p className=" text-sm text-white">My account</p>
                </div>
                <div className="flex flex-col justify-center text-white">
                    <span className=" flex flex-col text-[12px] gap-0">
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
            </div>

            <div className={!showDropDown ? 'hidden' : '' + 'z-50 right-4 border absolute min-w-[15rem] text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-1 overflow-y-auto'} >
                <ul className="">
                    <li  className="nav-dropdown-item text-sm"> <span>Profile</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Order History</span> </li>
                    <Link href="/business/details">   <li onClick={()=>setShowDropDown(!showDropDown)}  className="nav-dropdown-item text-sm"> <span>My Business</span> </li></Link>
                    <li  className="nav-dropdown-item text-sm"> <span>Settings</span> </li>
                    <li  className="nav-dropdown-item text-sm"> <span>Logout</span> </li>
                </ul>
            </div>
        </>
    )
}


export const Drawer = forwardRef<DrawerFunctions>((_, ref) => {
    const [open, setOpen] = useState(false)
    const landingUrl = process.env.REACT_APP_LANDING_URL;

    useImperativeHandle(ref, () => ({
        openDrawer
    }));

    const openDrawer = () => {
        setOpen(true)
    }
    return (
        <>
            <div className={"fixed z-50 h-full top-0 right-0 bg-gray-200 py-4 transition-all ease-in-out duration-700 " + ((open) ? " w-60" : "w-0")}>
                <div className="h-screen flex flex-col">
                    <div className="flex px-4 justify-end">
                        <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" className=" text-black opacity-80 cursor-pointer" width="25" height="25" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clipRule="evenodd" /></svg>
                    </div>
                    <div className=" px-4 flex flex-col flex-grow">
                        <div className=" flex-grow ">
                            <ul>
                                <li className=" text-black opacity-95 py-2 text-sm hover:text-prim-green">
                                    <Link href="/">About</Link>
                                </li>

                                <li className=" text-black opacity-95 py-2 text-sm hover:text-prim-green">
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li className=" text-black opacity-95 py-2 text-sm hover:text-prim-green">
                                    <Link href="/faq">FAQs</Link>
                                </li>
                                <li className=" text-black opacity-95 py-2 text-sm hover:text-prim-green">
                                    <a href="/signup">Register</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </>

    );
})