import coffeeImage from "@/assets/img/Green-Coffee-Beans.jpg";
import CoffeeImage2 from "@/assets/img/Coffee-764.jpg";
import CoffeeImage3 from "@/assets/img/close-up-coffee-beans-spilled-from-bag.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const testSuppliers = [
    {
        imageSrc: coffeeImage,
        name: "Kasozi Agro Suppliers",
        price: "UGX 20,000 Per Kg",
        supplier: "Fotis Agro Limitted"
    },
    {
        imageSrc: CoffeeImage3,
        name: "Fotis Agro Limitted",
        price: "UGX 20,000 Per Kg",
        supplier: "Kawogo Agro Suppliers and Logistics"
    },
    {
        imageSrc: CoffeeImage2,
        name: "Best Agro Limitted",
        price: "UGX 1,800,000",
        supplier: "Fotis Agro Limitted"
    },

];

const AgroSuppliers = () => {

    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {testSuppliers.map((product, index) => (
                    <div key={index} className="py-2 rounded-none shadow-lg card hover:shadow-2xl cursor-pointer ">
                        <div className="card-body flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="w-full flex justify-center">
                                    <Image className=" h-36 w-auto" src={product.imageSrc} alt="" />
                                </div>
                                <div className=" px-2 mt-2 flex flex-col">
                                    <h1 className="font-medium text-lg">{product.name}</h1>
                                    <div className="bg-gray-50 p-2 rounded mt-3 flex flex-col gap-2">
                                        <div className="flex  text-sm">
                                            <p className="flex-grow">
                                                Available stock
                                            </p>
                                            <p>200 tones</p>
                                        </div>
                                        <div className="flex  text-sm">
                                            <p className="flex-grow">
                                                Price
                                            </p>
                                            <p>230,000 per tone</p>
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
