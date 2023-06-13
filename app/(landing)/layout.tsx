"use client";
import Logo from "@/assets/img/logo.png"
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Link from "next/link";
import Image from 'next/image'

const MainLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const drawerRef = useRef<DrawerFunctions>(null);

    return (
        <div className=" ">
            <nav className=" bg-prim-color pt-4 pb-4 sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:block w-full z-50">
                <div className="horizontal-padding h-full ">
                    <div className="flex flex-row  ">
                        <div className=" h-full">
                            <Image width={90} src={Logo} alt="Ntuma Logo" />
                        </div>
                        <div className="flex-grow flex justify-center">
                            <Link href="/" className="nav-link">home</Link>
                            <Link href="/" className="nav-link">about</Link>
                            <Link className="nav-link" href="faq">services</Link>
                            <Link href="/contact" className="nav-link">shop</Link>
                            <Link href="/contact" className="nav-link">contact</Link>
                        </div>
                        <div className="flex flex-col justify-end h-auto ">
                            <a href="https://dashboard.ntuma.app" type="button" className=" text-black bg-prim-orange hover:bg-prim-green focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center cursor-pointer   ">Sign In</a>
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
            {/* <Footer /> */}
            <Drawer ref={drawerRef} />
        </div>
    )
}

export default MainLayout;

export const Footer = () => {
    return (
        <div className=" bg-body-bg border-t-2  pt-20 pb-7">
            <div className="horizontal-padding">
                {/* <Image width={80} src={Logo2} alt="" /> */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-4 text-sm">
                    <div className=" pt-14 pb-5 ">
                        <p className="">0393208406</p>
                        <p className="mt-3">support@ntuma.app</p>
                        <p className="mt-3">Ntinda Road, Plot 49 Rovis Apartment, <br /> Suite C8</p>
                    </div>
                    <div className=" pb-5">
                        <p className=" text-prim-green font-bold mb-3">Product</p>
                        <ul className=" gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="/">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/faq">FAQs</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/contact">Contact</Link>
                            </li>
                            <li>
                                <a className="hover:text-prim-green" href="https://dashboard.ntuma.app/signup">Register</a>
                            </li>

                        </ul>
                    </div>
                    <div className=" pb-5">
                        <p className=" text-prim-green font-bold mb-3">Company</p>
                        <ul className=" gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="/terms">Terms of Use</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" pb-5">
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
                                    <a href="https://dashboard.ntuma.app/signup">Register</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </>

    );
})