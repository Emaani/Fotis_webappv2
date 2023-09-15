import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { toast } from "react-toastify"
import AppButton from "~/app/global/components/AppButton"
import MoneyInput from "~/app/global/components/MoneyInput"
import useCommoditiesRequest from "~/app/global/hooks/requests/useCommoditiesRequest"
import useValidateFormFields, { IFormData } from "~/app/global/hooks/validate/validateFormFields"
import { showToastMessage } from "~/app/global/state/features/generalSlice"
import { useAppDispatch } from "~/app/global/state/hooks"
import { Commodity, CommodityPrice } from "~/app/global/types/commodity"

interface FormData extends IFormData {
  commodityId: number | undefined,
  price: number | null,
  currency: string,
  units: string,
  referenceDate: string
}

type TypeNewPriceModalProps = {
  isOpen: boolean,
  onClose: () => void,
  priceCreated: () => void,
  commodity: Commodity | null
}
const NewPriceModal = (props: TypeNewPriceModalProps) => {
  const { isFormFieldEmpty } = useValidateFormFields()
  const { saveCommodityPrice, savingPrice } = useCommoditiesRequest()
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<FormData>({
    commodityId: undefined,
    price: null,
    currency: "",
    units: "",
    referenceDate: ""
  });

  const saveRecord = async () => {
    if (isFormFieldEmpty("price", formData, "price")) return
    if (isFormFieldEmpty("currency", formData, "currency")) return
    if (isFormFieldEmpty("units", formData, "units")) return
    if (isFormFieldEmpty("referenceDate", formData, "referenceDate")) return

    const data = formData
    data.commodityId = props.commodity?.id
    try {
      const response = await saveCommodityPrice(data)
      dispatch(showToastMessage({
        message: "Price Created ",
        type: "success",
        position: toast.POSITION.TOP_RIGHT
      }));
      props.priceCreated()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {(props.isOpen) &&
        <div className="modal ">
          <div className=" modal-content modal-lg p-0 ">
            <div className=" flex  bg-gray-50 px-4 py-3 rounded-t">
              <div className=" flex-grow">
                <span className="text-center text-lg">New Price for {props.commodity?.name}</span>
              </div>
              <div>
                <FontAwesomeIcon onClick={() => props.onClose()} className=" cursor-pointer" size="lg" icon={faClose} />
              </div>
            </div>

            <div className="px-4 pb-5 max-h-[80vh] overflow-y-auto ">
              <div className=" grid grid-cols-2 gap-2  w-full mt-4">
                <div className="">
                  <label htmlFor="" className="form-label-1 ">Price</label>
                  <MoneyInput onChange={(value) => setFormData({ ...formData, price: value })} className={"form-input"} />
                </div>
                <div className="">
                  <label htmlFor="" className="form-label-1 ">Currency</label>
                  <select
                    value={formData.currency ?? ""} onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                    className="form-input" name="" id="">
                    <option value="">Select</option>
                    <option value="UGX">UGX</option>
                    <option value="USD" >USD</option>
                  </select>
                </div>
              </div>

              <div className="w-full mt-4">
                <label htmlFor="lastName" className="form-label-1 ">Units</label>
                <input value={formData.units ? formData.units : ""} onChange={(e) => setFormData({ ...formData, units: e.target.value })} type="text" placeholder="Enter units e.g kg" className="form-input" />
              </div>

              <div className="w-full mt-4">
                <label htmlFor="lastName" className="form-label-1 ">Reference Date</label>
                <input value={formData.referenceDate ? formData.referenceDate : ""} onChange={(e) => setFormData({ ...formData, referenceDate: e.target.value })} type="date" placeholder="As of" className="form-input" />
              </div>
              <div className="flex  pt-4 px-0  gap-2">
                <div>
                  <AppButton callBackFun={() => saveRecord()} showLoader={savingPrice} spinnerClass="inline w-3 h-3 mr-2 text-white animate-spin fill-black" className="btn-primary text-sm py-2.5" text="Save" />
                </div>
                <div>
                  <button onClick={() => props.onClose()} type="button" className="btn-secondary ">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default NewPriceModal;