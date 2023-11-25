import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ListedInventory } from "~/app/global/types/inventory";
import { STORAGE_URL } from "~/app/global/utils/constants";


const AgroSuppliers = ({ listedInventory, onClick }: { listedInventory: ListedInventory[], onClick: (item: ListedInventory) => void }) => {

    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                {listedInventory.filter((item)=> item.quantity >0).map((listed, index) => (
                    <div onClick={() => onClick(listed)} key={index} className="py-2 rounded-none shadow-lg card hover:shadow-2xl cursor-pointer ">
                        <div className="card-body flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="w-full flex justify-center">
                                    <img className="h-36 w-auto" src={STORAGE_URL + "/" + listed.Inventory.image} alt="" />
                                </div>
                                <div className=" px-2 mt-2 flex flex-col">
                                    <h1 className="font-medium text-lg">{listed.Inventory.name}</h1>
                                    <div className="bg-gray-50 p-2 rounded mt-3 flex flex-col gap-2">
                                        <div className="flex  text-sm">
                                            <p className="flex-grow">
                                                Supplier
                                            </p>
                                            <p>{listed.User.firstName} {listed.User.lastName}</p>
                                        </div>
                                        <div className="flex  text-sm">
                                            <p className="flex-grow">
                                                Available Qty
                                            </p>
                                            <p>{listed.quantity} {listed.Inventory.units}</p>
                                        </div>
                                        <div className="flex  text-sm">
                                            <p className="flex-grow">
                                                Unit Price
                                            </p>
                                            <p>UGX {listed.unitPrice.toLocaleString()}</p>
                                        </div>

                                    </div>
                                    <div className="flex mt-2 justify-">
                                        <div className="flex-grow">
                                            <a className=" text-prim-green-2 text-xs font-semibold hover:underline" href="">View Details</a>
                                        </div>
                                        <div className="flex items-center space-x-1 mt-2 opacity-60 text-xs">
                                            <FontAwesomeIcon className=" text-prim-orange" icon={faStar} />
                                            <FontAwesomeIcon className=" text-prim-orange" icon={faStar} />
                                            <FontAwesomeIcon className=" text-prim-orange" icon={faStar} />
                                            <FontAwesomeIcon className=" text-prim-orange" icon={faStar} />
                                            <FontAwesomeIcon className=" text-gray-400" icon={faStar} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AgroSuppliers;
