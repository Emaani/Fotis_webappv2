"use client";

import Logo from "@/assets/img/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../global/state/hooks";
import { deleteAuthTokens, getUserProfile, selectAuthentication } from "../global/state/features/auth/authSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const authenticated = useAppSelector(selectAuthentication);
    const dispatch = useAppDispatch();

    const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);

    return (
        <div className="">
            <nav className="bg-prim-color border-b pt-4 pb-4 w-full z-50">
                <div className="horizontal-padding h-full">
                    <div className="flex flex-row items-center">
                        <div className="h-full">
                            <Image width={75} src={Logo} alt="Fotis Logo" />
                        </div>
                        <div className="flex-grow flex justify-center uppercase text-xs">
                            <Link href="/" className="top-nav-link">Market</Link>

                            <div
                                className="relative"
                                onMouseEnter={() => setIsServicesDropdownVisible(true)}
                                onMouseLeave={() => setIsServicesDropdownVisible(false)}
                            >
                                <Link href="/" className="top-nav-link">
                                    Services
                                </Link>
                                {isServicesDropdownVisible && (
                                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                        <ul className="py-2">
                                            <li>
                                                <Link href="/warehousing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Warehousing</Link>
                                            </li>
                                            <li>
                                                <Link href="/logistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Logistics</Link>
                                            </li>
                                            <li>
                                                <Link href="/land" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Land</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <Link href="/home" className="top-nav-link">Dashboard</Link>
                            <Link href="/contact" className="top-nav-link">Contracts</Link>
                        </div>
                        <div className="flex flex-col justify-end h-auto">
                            {!authenticated ? (
                                <Link
                                    href="/login"
                                    type="button"
                                    className="text-black bg-prim-orange hover:bg-prim-green focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center cursor-pointer"
                                >
                                    Sign In
                                </Link>
                            ) : (
                                <MyAccountSection />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;

export const Footer = () => {
    return (
        <div className="bg-prim-color border-t-2 pt-20 pb-7 text-white">
            <div className="horizontal-padding">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-4 text-sm">
                    <div className="pb-5">
                        <Image width={80} src={Logo} alt="Fotis Logo" />
                        <p className="mt-5">+256 757 220113</p>
                        <p className="mt-3">fotisenterprises@gmail.com</p>
                        <p className="mt-3">10 Bukoto St, Kampala, Uganda <br /></p>
                    </div>
                    <div className="pb-5 pt-5">
                        <p className="text-prim-green font-bold mb-3">Company</p>
                        <ul className="gap-3 flex flex-col">
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
                   
                    <div className="pb-5 pt-5">
                        <p className="text-prim-green font-bold mb-3">Community</p>
                        <ul className="gap-3 flex flex-col">
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
                                <Link className="hover:text-prim-green" href="/">YouTube</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="pb-5 pt-5">
                        <p className="text-prim-green font-bold mb-3">Partners</p>
                        <ul className="gap-3 flex flex-col">
                            <li>
                                <Link className="hover:text-prim-green" href="https://ugandacoffee.go.ug/" target="_blank" rel="noopener noreferrer">UCDA</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Nature Food Commodities</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="/">Nile Agro</Link>
                            </li>
                            <li>
                                <Link className="hover:text-prim-green" href="https://www.amsaf.africa/" target="_blank" rel="noopener noreferrer">AMSAF</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-center mt-14 text-sm">© 2024 All rights reserved</p>
            </div>
        </div>
    );
};
