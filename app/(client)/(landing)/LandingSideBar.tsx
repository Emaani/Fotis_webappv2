import { faHammer, faShop, faShoppingBag, faShoppingBasket, faTruck, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LandingSideBar = () => {
    return (
        <>
            <div className=" bg-white">
                <div className="flex flex-col">
                    <ul className="services-list">
                        <li className=' text-prim-green-2 font-semibold flex gap-2'>  <FontAwesomeIcon width={17} icon={faShop} /> Overview</li>
                        <li className='flex gap-2'>  <FontAwesomeIcon width={17} icon={ faShoppingBag} /> Buy Products</li>
                        <li className="flex gap-2"><FontAwesomeIcon width={17} icon={faTruck} /> Logistics</li>
                        <li className="flex gap-2"> <FontAwesomeIcon width={17} icon={faWarehouse} />Warehouses</li>
                        <li className="flex gap-2">  <FontAwesomeIcon width={17} icon={faHammer} />Auctions</li>
                    </ul>

                    <div className='mt-4'>
                        <div className=" mt-1 card rounded-none">
                            <div className="px-2 py-2 bg-gray-100" >
                                <span className='text-sm font-medium'>Agro Categories</span>
                            </div>
                            <ul className="categories-list  ">
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Livestock</li>
                                <li>Rice</li>
                                <li>Eggs</li>
                                <li>Beans</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingSideBar;