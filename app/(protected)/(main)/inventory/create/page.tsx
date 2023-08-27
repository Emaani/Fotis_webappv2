"use client"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import AppButton from "~/app/global/components/AppButton"
import useValidateFormFields, { IFormData } from "~/app/global/hooks/validate/validateFormFields"
import { showToastMessage } from "~/app/global/state/features/generalSlice"
import { useAppDispatch } from "~/app/global/state/hooks"
import BreadCrumb from "~/app/global/components/BreadCrumb"
import useInventoryRequest from "~/app/global/hooks/requests/useInventoryRequest"
import DropFile, { DropFileFunctions } from "~/app/global/components/DropFile"
import useCommoditiesRequest from "~/app/global/hooks/requests/useCommoditiesRequest"
import useWarehousesRequest from "~/app/global/hooks/requests/useWarehousesRequest"

interface FormData extends IFormData {
  name: string,
  quantity: number | null,
  units: string,
  image: string | null,
  description: string,
  commodityId: number | null,
  warehouseId: number | null
}



export default function CreateOfficer() {
  const dispatch = useAppDispatch()
  const router = useRouter();
  const dropFileRef = useRef<DropFileFunctions>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    quantity: null,
    units: "",
    image: null,
    description: "",
    commodityId: null,
    warehouseId: null
  });

  const [imageFile, setImageFile] = useState<File | null>(null)
  const { isFormFieldEmpty } = useValidateFormFields()
  const { saveInventoryDetails, savingInventory } = useInventoryRequest()
  const {commodities,fetchCommodities,isFetching} = useCommoditiesRequest()
  const {getMyWarehouse,myWarehouse} = useWarehousesRequest()
  useEffect(()=>{
    fetchCommodities()
    getMyWarehouse()
  },[])

  const saveInventory = async () => {
    if (isFormFieldEmpty("name", formData)) return
    if (isFormFieldEmpty("quantity", formData)) return
    if (isFormFieldEmpty("units", formData)) return
    if (isFormFieldEmpty("image", formData)) return
    if (isFormFieldEmpty("description", formData)) return
    if (isFormFieldEmpty("commodityId", formData)) return
    let data =formData
    if (myWarehouse){
       data.warehouseId=myWarehouse.id
    }
    try {
      const response = await saveInventoryDetails(data)
      dispatch(showToastMessage({
        message: "Inventory Created ",
        type: "success",
        position: toast.POSITION.TOP_RIGHT
      }));
      router.push("/inventory")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <div className="flex">
        <div className=" flex flex-col justify-center flex-grow">
          <p className=" font-semibold opacity-80 text-lg" >New Inventory</p>
        </div>
        <BreadCrumb items={
          [
            { text: 'Inventory', link: '/inventory' },
            { text: 'Create', link: '/inventory/create' },
          ]
        } />
      </div>

      <div className="card shadow-lg mt-3">
        <div className="card-body pt-2 pb-4 px-4">

          <div className=" w-1/2 ">

            <div className=" w-full mt-4">
              <label htmlFor="lastName" className="form-label-1 ">Name</label>
              <input value={formData.names} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Enter names" className="form-input" />
            </div>

            <div className=" w-full mt-4">
              <label htmlFor="lastName" className="form-label-1">Commodity</label>
              <select
              value={formData.commodityId??""} onChange={(e) => setFormData({ ...formData, commodityId: parseInt(e.target.value) })} 
              className="form-input" name="" id="">
                <option value="">Select</option>
                {
                  commodities.map((item,key)=>
                  <option key={key} value={item.id}>{item.name}</option>
                  )
                }
              </select>
            </div>

            

            <div className="w-full mt-4 grid grid-cols-2 gap-3 ">
              <div className="">
                <label htmlFor="lastName" className="form-label-1 ">Quantity</label>
                <input value={formData.quantity ? formData.quantity : ""} onChange={(e) => setFormData({ ...formData, quantity: parseFloat(e.target.value) })} type="text" placeholder="Enter quantity" className="form-input" />
              </div>
              <div className="">
                <label htmlFor="lastName" className="form-label-1 ">Units</label>
                <input value={formData.units ? formData.units : ""} onChange={(e) => setFormData({ ...formData, units: e.target.value })} type="text" placeholder="Enter units e.g kg" className="form-input" />
              </div>
            </div>

            <div className=" w-full mt-4">
              <label htmlFor="lastName" className="form-label-1 ">Description</label>
              <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} name="" id="" cols={30} rows={5} className="form-input"></textarea>
            </div>

            <div className="w-full mt-4 ">
              <label htmlFor="lastName" className="form-label-1 ">Image</label>
              <DropFile ref={dropFileRef} getFileUrl={(fileUrl) => {
                setFormData({ ...formData, image: fileUrl })
              }} StorageFolder="certificates" SubText="Image" />
            </div>


            <div className=" mt-5">
              <AppButton callBackFun={() => saveInventory()} showLoader={savingInventory} spinnerClass="inline w-3 h-3 mr-2 text-prim-yellow animate-spin fill-black" className="btn-primary px-14" text="Save" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}





