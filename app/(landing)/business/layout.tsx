import { faBriefcase, faBuilding, faCrop, faHammer, faLeaf, faMessage, faShop, faTruck, faWallet, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BusinessLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <section className='horizontal-padding'>
                <div className=' '>
                    <div className='mt-10 grid grid-cols-5 gap-4'>
                        <div className=" col-span-1 " >
                            <div className=" bg-white">
                                <div className="flex flex-col">
                                    <ul className="services-list">
                                        <li className=' text-prim-green-2 font-semibold'>  <FontAwesomeIcon width={30} icon={faBriefcase} />Business Details</li>
                                        <li>  <FontAwesomeIcon width={30} icon={faShop} /> My Products</li>
                                        <li> <FontAwesomeIcon width={30} icon={faWarehouse} /> Warehouses</li>
                                        <li><FontAwesomeIcon width={30} icon={faTruck} /> Vehicles</li>
                                        <li>  <FontAwesomeIcon width={30} icon={faHammer} />Manage Auctions</li>
                                        <li>  <FontAwesomeIcon width={30} icon={faMessage} />Messages</li>
                                        <li>  <FontAwesomeIcon width={30} icon={faWallet} />My Wallet</li>
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