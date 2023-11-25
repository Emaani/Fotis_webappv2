"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp, faClose, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import AgroSuppliers from "../AgroSuppliers";
import useCommoditiesRequest from "~/app/global/hooks/requests/useCommoditiesRequest";
import useListedInventoryRequest from "~/app/global/hooks/requests/useListedInventoryRequest";
import AppSpinner from "~/app/global/components/AppSpinner";
import Link from "next/link";
import { ListedInventory } from "~/app/global/types/inventory";
import { STORAGE_URL } from "~/app/global/utils/constants";
import { useAppDispatch, useAppSelector } from "~/app/global/state/hooks";
import { selectAuthentication } from "~/app/global/state/features/auth/authSlice";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NumericFormat } from "react-number-format"
import { Commodity } from "~/app/global/types/commodity";
import AppButton from "~/app/global/components/AppButton";
import { useRouter } from "next/navigation";
import { showToastMessage } from "~/app/global/state/features/generalSlice";
import { toast } from "react-toastify";
import { cleanAmount } from "~/app/global/utils/commons";

export default function Market({ params: { commodityId } }: { params: { commodityId: string } }) {
    const { fetchCommodityDetails, isFetching, commodityDetails } = useCommoditiesRequest()
    const { fetchListedInventoryByCommodityId, listedInventory, isFetching: fetchingList } = useListedInventoryRequest()
    useEffect(() => {
        fetchCommodityDetails(parseInt(commodityId))
        fetchListedInventoryByCommodityId(parseInt(commodityId))
    }, [commodityId])
    const [showDetailsPane, setShowDetailsPane] = useState(false)
    const [selectedInventory, setSelectedInventory] = useState<ListedInventory | null>(null)
    const itemClicked = (item: ListedInventory) => {
        setSelectedInventory(item)
        setShowDetailsPane(true)
    }

    const paneClosed = () => {
        setSelectedInventory(null)
        setShowDetailsPane(false)
    }
    return (
        <>

            {
                (commodityDetails) ?
                    <>
                        <section className='horizontal-padding'>
                            <div className='mt-6 mb-10'>
                                <div className="flex mb-4">
                                    <div className=" flex flex-col justify-center flex-grow">
                                        <nav className="flex" aria-label="Breadcrumb">
                                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                                <li className="inline-flex items-center">
                                                    <Link href="/">
                                                        <span className="inline-flex items-center text-sm font-medium text-gray-700  hover:text-prim-green ">
                                                            Market
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li aria-current="page">
                                                    <div className="flex items-center">
                                                        <svg aria-hidden="true" className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{commodityDetails?.name}</span>
                                                    </div>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="w-1/3">
                                        {/* <SearchInput /> */}
                                    </div>
                                </div>
                                {
                                    ((isFetching || fetchingList)) && <AppSpinner />
                                }
                                {
                                    ((!isFetching || !fetchingList) && listedInventory.length == 0) &&
                                    <p className=" text-center text-sm mt-10">No Suppliers Yet!</p>
                                }
                                <div className=" mt-6">
                                    <AgroSuppliers onClick={(item) => itemClicked(item)} listedInventory={listedInventory} />
                                </div>
                                {
                                    (selectedInventory && commodityDetails) &&
                                    <ProductDetailsSection listed={selectedInventory} isOpen={showDetailsPane} onClose={() => paneClosed()} commodityDetails={commodityDetails} />
                                }

                            </div>
                        </section>
                    </> :
                    <AppSpinner />
            }
        </>
    )
}

type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    listed: ListedInventory,
    commodityDetails: Commodity
}

type FormValues = {
    msisdn: string,
    quantity: string
};

const ProductDetailsSection = ({ listed, onClose, commodityDetails, isOpen }: ModalProps) => {
    const { purchaseInvetory, isPurchasing } = useListedInventoryRequest()

    const authenticated = useAppSelector(selectAuthentication)
    const schema = yup.object({
        quantity: yup.string().required("Quantiy is required."),
        msisdn: yup.string().required("Phone is required."),
    });
    const form = useForm<FormValues>({
        defaultValues: {
            msisdn: "",
            quantity: ""
        },
        resolver: yupResolver(schema),
    });
    const { register, handleSubmit, formState, control, watch } = form;
    const { errors } = formState;
    const dispatch = useAppDispatch()
    const router = useRouter();

    const onSubmit = async (data: FormValues) => {
        try {
            const formData = {
                ...data,
                listedInventoryId: listed.id,
                units: listed.Inventory.units,
                quantity: parseFloat(data.quantity)
            }
            await purchaseInvetory(formData)
            dispatch(showToastMessage({
                message: "Inventory Purchased ",
                type: "success",
                position: toast.POSITION.TOP_RIGHT
            }));
            router.push("/inventory")
        } catch (error) {
            console.log(error)
        }
    };

    const watchQty = watch("quantity")
    const caliculateTotalPrice = () => {
        if (watchQty) {
            return listed.unitPrice * parseFloat(watchQty)

        } else {
            return 0
        }
    }
    return (
        <>
            {isOpen &&
                <div className="pane ">
                    <div className=" pane-content pane-md px-4">
                        <div className=" flex">
                            <div className=" flex-grow">
                                <h1 className=' text-xl font-bold text-gray-800'>Buy Inventory</h1>
                            </div>
                            <div>
                                <FontAwesomeIcon onClick={() => onClose()} className=" cursor-pointer font-medium" size="lg" icon={faClose} />
                            </div>
                        </div>

                        <div className="w-full flex justify-center mt-2">
                            <div
                                className="bg-gray-50 flex justify-center rounded "
                                style={{
                                    backgroundImage: `url(${listed.Inventory.image ? `${STORAGE_URL}/${listed.Inventory.image}` : ""})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "200px", // Adjust the height as needed
                                    width: "100%", // Adjust the width as needed
                                    borderRadius: "8px", // Adjust the border radius as needed
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adjust the box shadow as needed
                                }}
                            ></div>
                        </div>
                        <h1 className="font-medium text-xl mt-2"><span className=""> {listed.Inventory.name}</span></h1>
                        <DescriptionComponent
                            description={listed.Inventory.description}
                        />
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
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div>
                                <div className=" w-full mt-4">
                                    <label htmlFor="quantity" className="form-label-1 ">Quatity</label>
                                    <input  {...register("quantity")} id="quantity" type="number" placeholder="Enter quntity" className="form-input" />
                                    <p className="text-xs text-red-600">{errors.quantity?.message}</p>

                                </div>
                                <div className=" w-full mt-4">
                                    <label htmlFor="price" className="form-label-1 ">Total Price</label>
                                    <input value={caliculateTotalPrice().toLocaleString()} readOnly id="price" type="text" placeholder="Total Price" className="form-input" />
                                    <p className="text-xs text-red-600"></p>
                                </div>
                                <div className=" w-full mt-4">
                                    <label htmlFor="msisdn" className="form-label-1 ">Mobile Money</label>
                                    <input  {...register("msisdn")} id="msisdn" type="text" placeholder="Enter your mobile money number" className="form-input" />
                                    <p className="text-xs text-red-600">{errors.msisdn?.message}</p>
                                </div>
                                {
                                    authenticated ?
                                        <AppButton
                                            type="submit"
                                            callBackFun={() => { }} showLoader={isPurchasing} spinnerClass="inline w-3 h-3 mr-2 text-prim-yellow animate-spin fill-black" className="btn-primary-2 mt-4 mb-4 w-full" text="Buy Invetory" />

                                        // <button className="btn-primary-2 mt-4 mb-4 w-full">Buy Invetory</button>
                                        :
                                        <Link href={"/login?from=/commodity/" + commodityDetails.id}>
                                            <button className="btn-primary  mt-4 mb-4 w-full">Login To Buy Invetory</button>
                                        </Link>
                                }
                            </div>
                        </form>

                    </div>
                </div>
            }
        </>
    )
}

const DescriptionComponent = ({ description }: { description?: string }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const descriptionClass = `text-sm mt-1 ${expanded ? '' : 'line-clamp-1'}`;

    return (
        <div>
            {
                description &&
                <div>
                    <p
                        className={descriptionClass}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <span
                        className="text-green-600 text-xs cursor-pointer"
                        onClick={toggleExpanded}
                    >
                        {expanded ? 'Read less' : 'Read more'}
                    </span>
                </div>

            }

        </div>
    );
};

const SearchInput = () => {
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <>
            <div className="flex justify-end w-full">
                {/* <button onClick={() => setShowDropDown(!showDropDown)} type="button" className=" bg-gray-50 rounded-l h-auto px-2 flex flex-col justify-center w-1/3 hover:bg-gray-200">
                    <span className="text-center flex gap-1">
                        <span className="text-sm">Categories</span>
                        <span className="flex flex-col justify-center">
                            <FontAwesomeIcon width={10} icon={showDropDown ? faAngleUp : faAngleDown} />
                        </span>
                    </span>
                </button> */}
                <div className=" relative w-2/3">
                    <input type="text" className="form-input-1 py-2.5" />
                    <span className="absolute h-full top-0 right-0 flex flex-col justify-center px-2 opacity-70">
                        <FontAwesomeIcon width={15} icon={faSearch} />
                    </span>
                </div>
            </div>

            <div className={!showDropDown ? 'hidden' : '' + 'z-50  border absolute min-w-[15rem] max-h-[300px] pb-4 text-base list-none bg-white bg-opacity-100  shadow-2xl py-1 mt-1 overflow-y-auto'} >
                <ul className="">
                    <li className="nav-dropdown-item text-sm"> <span>Coffee</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Livestock</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Insecticides</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Grains</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Vegetable</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Herbicides</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Fodder & Feed Additives</span> </li>
                    <li className="nav-dropdown-item text-sm"> <span>Cereals</span> </li>


                </ul>
            </div>
        </>
    )
}