import { faLocation, faPaperPlane, faShop, faTruck, faHammer, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import CoffeeImage from "@/assets/img/Coffee-764.jpg"
import CashewsImage from "@/assets/img/Cashews-761.jpg"
import BeansImage from "@/assets/img/Beans-8.jpg"
import LiveStockImage from "@/assets/img/Livestock-776.jpg"
import RiceImage from "@/assets/img/Rice-781.jpg"
import EggsImage from "@/assets/img/Eggs-10.jpg"
import TeaImage from "@/assets/img/Tea-27.jpg"
import Link from 'next/link'







export default function Home() {
    return (
        <>
            <div className='bg-prim-color'>
                <div className='  top-p min-h-[600px] horizontal-padding pt-36 text-white'>
                    <div className=' w-3/4'>
                        <h1 className=' text-4xl font-bold'>Agri-Commodity Sourcing, Logistics <br /> & Warehousing</h1>
                        <p className='mt-4 text-justify text-sm opacity-80'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus in inventore at eligendi minus alias, perferendis a voluptas ab, possimus debitis aut reprehenderit fugiat facere consectetur. Possimus itaque eius provident inventore at eligendi minus alias, perferendis a voluptas ab, possimus debitis aut reprehenderit fugiat facere consectetur
                        </p>

                        <div className=' relative mt-6 w-2/3'>
                            <span className=' absolute bg-prim-green rounded-l px-2  h-full justify-center flex flex-col '>
                                <FontAwesomeIcon width={20} icon={faLocation} />
                            </span>
                            <input placeholder="what's your location?" type="text" className='bg-white pl-20  text-white text-[15px] rounded  w-full  py-[12px] px-1  focus:outline-none text-opacity-80' />
                            <span className=' cursor-pointer right-0 top-0 absolute text-prim-green rounded-r px-2  h-full justify-center flex flex-col '>
                                <div className='flex gap-2 text-xs font-semibold'>
                                    <FontAwesomeIcon width={15} icon={faPaperPlane} />
                                    <span>Use current location</span>
                                </div>
                            </span>
                        </div>


                    </div>
                </div>
            </div>

            <section className='horizontal-padding'>
                <div className=' py-32'>
                    <h1 className=' text-2xl text-center font-bold'>What are you looking for?</h1>
                    <div className=' flex justify-center gap-5 mt-10'>
                        <Link href="/agro-products">
                            <div className='service-card'>
                                <div className=' w-full flex justify-center'>
                                    <div className=' h-24 w-24  bg-gray-100 rounded-full text-center justify-center flex flex-col'>
                                        <div className=' flex justify-center w-full b'> <FontAwesomeIcon width={40} icon={faShop} /></div>
                                    </div>
                                </div>
                                <p className=' text-center  mt-2 font-medium'>Agro products</p>
                            </div>
                        </Link>

                        <div className='service-card'>
                            <div className=' w-full flex justify-center'>
                                <div className=' h-24 w-24  bg-gray-100 rounded-full text-center justify-center flex flex-col'>
                                    <div className=' flex justify-center w-full b'> <FontAwesomeIcon width={40} icon={faTruck} /></div>
                                </div>
                            </div>
                            <p className=' text-center  mt-2 font-medium'>Transportation </p>
                        </div>
                        <div className='service-card'>
                            <div className=' w-full flex justify-center'>
                                <div className=' h-24 w-24  bg-gray-100 rounded-full text-center justify-center flex flex-col'>
                                    <div className=' flex justify-center w-full b'> <FontAwesomeIcon width={40} icon={faWarehouse} /></div>
                                </div>
                            </div>
                            <p className=' text-center  mt-2 font-medium'>Warehouses </p>
                        </div>
                        <div className='service-card'>
                            <div className=' w-full flex justify-center'>
                                <div className=' h-24 w-24  bg-gray-100 rounded-full text-center justify-center flex flex-col'>
                                    <div className=' flex justify-center w-full b'> <FontAwesomeIcon width={40} icon={faHammer} /></div>
                                </div>
                            </div>
                            <p className=' text-center  mt-2 font-medium'>Auctions </p>
                        </div>
                    </div>
                </div>
            </section>

            

            
            <section className='horizontal-padding bg-gray-50'>
                <div className=' pt-24 pb-32'>
                    <h1 className=' text-2xl text-center font-bold'>Agro Products</h1>

                    <div className=' grid grid-cols-3 gap-4 mt-10'>
                        <div className='shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={CoffeeImage} alt={'coffe'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>Coffee</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>Coffee Beans, Green Coffee, Coffee Flavoring, Cappuccino Coffee, Brown Coffee Beans</p>
                            </div>
                        </div>

                        <div className=' shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={CashewsImage} alt={'coffe'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>Cashews</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>Organic Cashew, Lwp Cashew Nut, Dried Cashew Nuts, Cashew Nuts, Roasted Cashew</p>
                            </div>
                        </div>

                        <div className=' shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={LiveStockImage} alt={'coffe'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>LiveStock</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>Pet Cat, Farm Pig, Dairy Cow, Greasy Wool, Gir Cow</p>
                            </div>
                        </div>

                        <div className=' shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={BeansImage} alt={'Beans'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>Beans</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>Organic Bean, Red Beans, Organic Kidney Beans, White Kidney Bean, Black Eyed Beans, </p>
                            </div>
                        </div>

                        <div className=' shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={RiceImage} alt={'Rice'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>Rice</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>Basmati Rice, Hmt Rice, Navara Rice, Ratna Rice, Steam Broken Rice, </p>
                            </div>
                        </div>

                        <div className=' shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={EggsImage} alt={'Rice'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>Eggs</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>Hatching Eggs, Bird Eggs, Organic Eggs, Poultry Eggs, Kadaknath Egg </p>
                            </div>
                        </div>

                        
                        <div className=' shadow-xl bg-white'>
                            <div className='flex gap-3 px-3 py-2'>
                                <Image className=' rounded-lg border' width={70} src={TeaImage} alt={'Rice'}/>
                                <div className='flex flex-col justify-center'>
                                    <p>Tea</p>
                                </div>
                            </div>
                            <div className='px-2 pt-1 pb-3'>
                                <p className=' text-sm opacity-80'>
                                Lemon Tea, Green Tea Leaves, Ginger Tea Premix, Darjeeling Tea, Tea Leaves, 
                                </p>
                            </div>
                        </div>

                    </div>
                   
                </div>
            </section>

            <section className='horizontal-padding py-32'>
                <div className=" bg-prim-green shadow-xl border-0 bg-opacity-50 text-white  rounded-lg p-8 md:p-12 mb-8">

                    <h1 className="text-gray-900 dark:text-white text-2xl md:text-5xl font-extrabold mb-2">Become a partner</h1>
                    <p className=" font-normal text-gray-600 mb-4">Are you interested in selling agro products, offering transport services, providing warehouse services, or auctioning your livestock? Register below.</p>
                    <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-full bg-prim-green hover:bg-green-800 focus:ring-4 focus:ring-prim-green ">
                        Get started
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </section>

        </>
    )
}
