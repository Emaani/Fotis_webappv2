"use client";
import { faBriefcase, faBuilding, faCrop, faHammer, faLeaf, faMessage, faShop, faTruck, faWallet, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from "next/navigation";

const BusinessLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
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

    return (
        <>
            <section className='horizontal-padding'>
                <div className=' '>
                    <div className='mt-10 grid grid-cols-5 gap-4'>
                        <div className=" col-span-1 " >
                            <div className=" bg-white">
                                <div className="flex flex-col">
                                    <ul className="services-list">
                                        <Link href="/business/details">
                                            <li className={ isActiveLink(["/business/details"])}>  <FontAwesomeIcon width={17} icon={faBriefcase} />Business Details</li>
                                        </Link>
                                        <Link href="/business/my-products">
                                            <li className={ isActiveLink(["/business/my-products"])}> <FontAwesomeIcon width={17} icon={faShop} /> My Products</li>
                                        </Link>
                                        <li> <FontAwesomeIcon width={17} icon={faWarehouse} /> Warehouses</li>
                                        <li><FontAwesomeIcon width={17} icon={faTruck} /> Vehicles</li>
                                        <li>  <FontAwesomeIcon width={17} icon={faHammer} />Manage Auctions</li>
                                        <li>  <FontAwesomeIcon width={17} icon={faMessage} />Messages</li>
                                        <li>  <FontAwesomeIcon width={17} icon={faWallet} />My Wallet</li>
                                    </ul>

                                    

                                </div>
                            </div>

                        </div>
                        <div className=" col-span-4  ">
                            {children}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BusinessLayout