"use client";
import { Dispatch, SetStateAction, useState } from 'react';
import Image from "next/image";
import DropdownButton from '~/app/global/components/DropdownButton';
import FilePicker from '~/app/global/components/FilePicker';
import { testProducts } from '../../agro-products/AgroProducts';


export default function MyProducts() {
    const [activeTab, setActivetab] = useState("products");

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 px-2 ">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a onClick={() => setActivetab('products')} href="#!" className={(activeTab === 'products') ? "tab-active" : "tab-inactive"}>Products</a>
                    </li>
                    <li className="mr-2">
                        <a onClick={() => setActivetab('orders')} href="#!" className={(activeTab === 'orders') ? "tab-active" : "tab-inactive"} aria-current="page">Orders</a>
                    </li>
                </ul>
            </div>

            <div className='card shadow-lg rounded mb-20'>
                <div className='card-body pb-10 px-3'>
                    {
                        (activeTab === 'products') ?
                            <ProductsTab /> :
                            <>
                                Orders
                            </>
                    }
                </div>
            </div>
        </>
    )
}

const ProductsTab = () => {
    const [formOpen, setFormOpen] = useState(false)
    return (
        <>
            {
                formOpen ? <ProductsForm setFormOpen={setFormOpen} /> : <ProductsList setFormOpen={setFormOpen} />
            }
        </>
    )
}

type TypeProductsFormProps = {
    setFormOpen: Dispatch<SetStateAction<boolean>>
}

const ProductsForm = ({ setFormOpen }: TypeProductsFormProps) => {
    return (
        <>
            <div className='py-2'>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li onClick={() => setFormOpen(false)} className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700  hover:text-prim-green ">
                                Products
                            </a>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Create</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className='w-2/3 mt-3'>
                    <div className=" mt-3">
                        <label htmlFor="name" className="input-label">Name</label>
                        <input type="text" id="name" className="form-input " placeholder=" " />
                    </div>
                    <div className='flex mt-3 gap-3'>
                        <div className=" w-1/2">
                            <label htmlFor="name" className="input-label">Price</label>
                            <input type="number" id="name" className="form-input " placeholder=" " />
                        </div>
                        <div className=" w-1/2">
                            <label htmlFor="name" className="input-label">Units (e.g kg)</label>
                            <input type="text" id="name" className="form-input " placeholder=" " />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="name" className="input-label">Product Image</label>
                        <FilePicker />
                    </div>
                    <div className='mt-4 flex gap-3'>
                        <button className='prim-btn-1'>Save Changes</button>
                        <button onClick={()=>setFormOpen(false)} className='btn-light'>Cancel</button>

                    </div>
                </div>
            </div>
        </>
    )
}

type TypeProductsListProps = {
    setFormOpen: Dispatch<SetStateAction<boolean>>
}
const ProductsList = ({ setFormOpen }: TypeProductsListProps) => {
    return (
        <>
            <div className='flex'>
                <div className=' flex-grow flex flex-col justify-center'>
                    <span className='font-semibold text-sm'>Agro Products</span>
                </div>
                <div>
                    <button onClick={() => setFormOpen(true)} className='prim-btn-2'>Add Product</button>
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2 mb-4">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        testProducts.map((item, key) => {
                            return <tr key={key}>
                                <td>
                                    <div className='flex gap-2'>
                                        <Image className=" h-12 w-auto" src={item.imageSrc} alt="" />
                                        <div className=' flex flex-col justify-center'>
                                            {item.name}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>in stock</td>
                                <td className=' text-prim-green-2 font-medium'>
                                    <DropdownButton buttonClass={'text-sm'} options={[{ text: "Edit" }, { text: "Change Status" }]} />
                                </td>
                            </tr>
                        }
                        )
                    }

                </tbody>
            </table>
        </>
    )
}