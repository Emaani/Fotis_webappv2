"use client";
import Link from "next/link";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import personIcon from "../../assets/img/profile.ea4f1c2e.svg"
import AppSpinner from "@/global/components/AppSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faExchange, faFire, faLandmark, faLeaf, faList, faMinus, faPlus, faShop, faShoppingBag, faShoppingCart, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";
import LogoSection from "../LogoSection";
import { useAppDispatch, useAppSelector } from "~/app/global/state/hooks";
import { deleteAuthTokens, selectAuthUser } from "~/app/global/state/features/auth/authSlice";
import { USER_TYPES } from "~/app/global/utils/constants";

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
    const user = useAppSelector(selectAuthUser)
    const router = useRouter();

    useEffect(()=>{
        if (user) {
            if (user.userType != USER_TYPES.FOTIS_STAFF) {
                router.push("/")
            }
        }
    },[user])

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
                                <p className="">Admin</p>
                            </div>
                            <div className="flex flex-col justify-center h-full">
                                <MyAccountSection />
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
    const dispatch = useAppDispatch()
    const router = useRouter()
    const user = useAppSelector(selectAuthUser)


    const logoutUser = () => {
        localStorage.removeItem("accessToken")
        dispatch(deleteAuthTokens())
        router.push("/")
    }
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
        <div ref={dropdownRef}>
            <div onClick={() => setShowDropDown(!showDropDown)} className="flex gap-[3px] cursor-pointer">
                <p className=" text-sm capitalize">{user?.firstName} {user?.lastName}</p>
                <p className="flex flex-col justify-center"><FontAwesomeIcon width={10} icon={faAngleDown} /></p>
            </div>
            <div className={!showDropDown ? 'hidden' : '' + 'z-50 right-4 border absolute min-w-[13rem] rounded min-h-[80px] text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-8 overflow-y-auto top-4'} >
                <ul className="">
                    <li onClick={() => logoutUser()} className="nav-dropdown-item text-sm text-gray-600 font-normal"> <span>Logout</span> </li>
                </ul>
            </div>
        </div>
    )
}


// const MyAccountSection = () => {
//     const [showDropDown, setShowDropDown] = useState(false)

//     return (
//       <>
//         <span onClick={() => setShowDropDown(!showDropDown)} className=" hover:bg-green-600 border border-gray-200 cursor-pointer rounded-md flex justify-center h-8">
//           <Image className="w-5" src={personIcon} alt="" />
//         </span>
//         <div className={!showDropDown ? 'hidden' : '' + 'z-50 right-4 border absolute min-w-[13rem] rounded min-h-[80px] text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-8 overflow-y-auto'} >
//           <ul className="">
//             <li  className="nav-dropdown-item text-sm text-gray-600 font-normal"> <span>Logout</span> </li>
//           </ul>
//         </div>
//       </>
//     )
//   }


const SideItems = ({ isMinimized }: { isMinimized: boolean }) => {
    const pathname = usePathname();
    const [showTransactionsList, setShowTransactionsList] = useState(false)

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
                <Link className={navLink + " " + (isActiveLink(["/admin/home"]))} href="/admin/home" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faLandmark} />
                        </span>
                        <span className={navTitle}>Dashboard</span>
                    </span>
                </Link>
            </li>

            <li>
                <Link className={`${navLink} ${(isActiveLink(["/admin/commodities"]))}`} href="/admin/commodities" >
                    <span className="flex">
                        <span className="nav-icon">
                            <FontAwesomeIcon icon={faLeaf} />
                        </span>
                        <span className={navTitle}>Commodities</span>
                    </span>
                </Link>
            </li>

        </ul>
    );
}


