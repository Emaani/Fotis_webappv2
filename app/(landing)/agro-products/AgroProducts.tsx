import coffeeImage from "@/assets/img/Green-Coffee-Beans.jpg";
import DairyCowImage from "@/assets/img/Livestock-776.jpg";
import RiceImage from "@/assets/img/Rice-781.jpg";
import CashewsImage from "@/assets/img/Cashews-761.jpg"
import BeansImage from "@/assets/img/Beans-8.jpg"
import LiveStockImage from "@/assets/img/Livestock-776.jpg"
import EggsImage from "@/assets/img/Eggs-10.jpg"
import TeaImage from "@/assets/img/Tea-27.jpg"
import Image from "next/image";

const AgroProducts = () => {
    const products = [
        {
            imageSrc: coffeeImage,
            name: "Fresh Coffee beans",
            price: "UGX 20,000 Per Kg",
            supplier: "Fotis Agro Limitted"
        },
        {
            imageSrc: RiceImage,
            name: "Steam Rice Broken",
            price: "UGX 20,000 Per Kg",
            supplier: "Kawogo Agro Suppliers and Logistics"
        },
        {
            imageSrc: DairyCowImage,
            name: "Dairy Cow",
            price: "UGX 800,000 - 1,5000,000 (Approx)",
            supplier: "Fotis Agro Limitted"
        },
        {
            imageSrc: RiceImage,
            name: "Steam Rice Broken",
            price: "UGX 20,000 Per Kg",
            supplier: "Kawogo Agro Suppliers"
        },
        {
            imageSrc: EggsImage,
            name: "Fresh Egges",
            price: "UGX 20,000 Per Kg",
            supplier: "Fotis Agro Limitted"
        },
        {
            imageSrc: CashewsImage,
            name: "Cashews",
            price: "UGX 800,000 - 1,5000,000 (Approx)",
            supplier: "Fotis Agro Limitted"
        },
        {
            imageSrc: RiceImage,
            name: "Steam Rice Broken",
            price: "UGX 20,000 Per Kg",
            supplier: "Kawogo Agro Suppliers and Logistics"
        },
    ];

    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                {products.map((product, index) => (
                    <div key={index} className="py-2 rounded shadow-lg flex flex-col">
                        <div className="flex-grow">
                            <div className="w-full flex justify-center">
                                <Image className=" h-36 w-auto" src={product.imageSrc} alt="" />
                            </div>
                            <div className="py-2 px-2 mt-2 flex flex-col">
                                <h1 className="font-medium text-sm">{product.name}</h1>
                                <p className="text-xs font-medium text-green-900">
                                    {product.price}
                                </p>
                                <p className="text-sm opacity-80 mt-2">
                                    Supplier: {product.supplier}
                                </p>
                            </div>
                        </div>
                        <div className="px-2">
                            <button className="btn-light bg-gray-100 text-xs w-full mt-3">Place Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AgroProducts;
