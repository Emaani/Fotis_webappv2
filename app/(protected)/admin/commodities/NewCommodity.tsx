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
import { Commodity } from "~/app/global/types/commodity"

interface FormData extends IFormData {
  name: string,
}

type TypeNewCommodityModalProps = {
  isOpen: boolean,
  onClose: () => void,
  commodityCreated: () => void,
}
const NewCommodityModal = (props: TypeNewCommodityModalProps) => {
  const { isFormFieldEmpty } = useValidateFormFields()
  const { saveCommodityDetails, savingCommodity } = useCommoditiesRequest()
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

  const saveRecord = async () => {
    if (isFormFieldEmpty("name", formData, "name")) return
    const data = formData
    try {
      const response = await saveCommodityDetails(data)
      dispatch(showToastMessage({
        message: "Commodity Created ",
        type: "success",
        position: toast.POSITION.TOP_RIGHT
      }));
      props.commodityCreated()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {(props.isOpen) &&
        <div className="modal ">
          <div className=" modal-content modal-md p-0 ">
            <div className=" flex  bg-gray-50 px-4 py-3 rounded-t">
              <div className=" flex-grow">
                <span className="text-center text-lg">New Commodity</span>
              </div>
              <div>
                <FontAwesomeIcon onClick={() => props.onClose()} className=" cursor-pointer" size="lg" icon={faClose} />
              </div>
            </div>

            <div className="px-4 pb-5 max-h-[80vh] overflow-y-auto ">

              <div className=" w-full mt-4">
                <label htmlFor="" className="form-label-1 ">Commodity Name</label>
                <input value={formData.name ?? ""} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Commodity name" className="form-input" />
              </div>

              <div className="flex  pt-4 px-0  gap-2">
                <div>
                  <AppButton callBackFun={() => saveRecord()} showLoader={savingCommodity} spinnerClass="inline w-3 h-3 mr-2 text-white animate-spin fill-black" className="btn-primary text-sm py-2.5" text="Save" />
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

export default NewCommodityModal;