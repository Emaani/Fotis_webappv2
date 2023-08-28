import coffeeImage from "@/assets/img/Green-Coffee-Beans.jpg";
import CoffeeImage2 from "@/assets/img/Coffee-764.jpg";
import CoffeeImage3 from "@/assets/img/close-up-coffee-beans-spilled-from-bag.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ListedInventory } from "~/app/global/types/inventory";
import { STORAGE_URL } from "~/app/global/utils/constants";


const AgroSuppliers = ({ listedInventory }: { listedInventory: ListedInventory[] }) => {

    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {listedInventory.map((listed, index) => (
                    <div key={index} className="py-2 rounded-none shadow-lg card hover:shadow-2xl cursor-pointer ">
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
                                                Total
                                            </p>
                                            <p>{listed.quantity} {listed.Inventory.units}</p>
                                        </div>
                                        <div className="flex  text-sm">
                                            <p className="flex-grow">
                                                Unit Price
                                            </p>
                                            <p>{listed.unitPrice.toLocaleString()}</p>
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
