
import Image from "next/image";

export const testProducts: any[] = [


];


const AgroProducts = () => {

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {testProducts.map((product, index) => (
                    <div key={index} className="py-2 rounded-none shadow-xl card ">
                        <div className="card-body flex flex-col h-full">
                            <div className="flex-grow">
                                <div className="w-full flex justify-center">
                                    <Image className=" h-36 w-auto" src={product.imageSrc} alt="" />
                                </div>
                                <div className="py-2 px-2 mt-2 flex flex-col">
                                    <h1 className="font-medium text-sm">{product.name}</h1>
                                    <p className="text-xs font-semibold text-prim-green-2">
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
                    </div>
                ))}
            </div>
        </>
    );
};

export default AgroProducts;
