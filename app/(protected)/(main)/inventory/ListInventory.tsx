import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { toast } from "react-toastify"
import AppButton from "~/app/global/components/AppButton"
import MoneyInput from "~/app/global/components/MoneyInput"
import useListedInventoryRequest from "~/app/global/hooks/requests/useListedInventoryRequest"
import useValidateFormFields, { IFormData } from "~/app/global/hooks/validate/validateFormFields"
import { showToastMessage } from "~/app/global/state/features/generalSlice"
import { useAppDispatch } from "~/app/global/state/hooks"
import { Inventory } from "~/app/global/types/inventory"

interface FormData extends IFormData {
  quantity: number | null,
  unitPrice: number | null,
  inventoryId: number | undefined
}

type TypeNewListedInventoryModalProps = {
  isOpen: boolean,
  onClose: () => void,
  inventoryListed: () => void,
  inventory: Inventory | null
}
const ListInventoryModal = (props: TypeNewListedInventoryModalProps) => {
  const { isFormFieldEmpty } = useValidateFormFields()
  const { savingListedInventory, saveListedInventoryDetails } = useListedInventoryRequest()
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState<FormData>({
    quantity: null,
    unitPrice: null,
    inventoryId: undefined,
  });

  const saveRecord = async () => {
    if (isFormFieldEmpty("quantity", formData, "quantity")) return
    if (isFormFieldEmpty("unitPrice", formData, "unitPrice")) return
    // if (isFormFieldEmpty("inventoryId", formData, "inventoryId")) return
    const data = formData
    data.inventoryId = props.inventory?.id
    try {
      const response = await saveListedInventoryDetails(data)
      dispatch(showToastMessage({
        message: "Inventory  Listed ",
        type: "success",
        position: toast.POSITION.TOP_RIGHT
      }));
      props.inventoryListed()
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
                <span className="text-center text-lg">List Inventory {props.inventory&&`[${props.inventory.name}]`}</span>
              </div>
              <div>
                <FontAwesomeIcon onClick={() => props.onClose()} className=" cursor-pointer" size="lg" icon={faClose} />
              </div>
            </div>

            <div className="px-4 pb-5 max-h-[80vh] overflow-y-auto ">
              <div className="w-2/3">

                <div className=" w-full mt-4">
                  <label htmlFor="" className="form-label-1 ">Quantity Listed</label>
                  <input value={formData.quantity ?? ""} onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })} type="number" placeholder="Enter quantity" className="form-input" />
                </div>

                <div className=" w-full mt-4">
                  <label htmlFor="" className="form-label-1 ">Unit Pice</label>
                  <MoneyInput onChange={(value) => setFormData({ ...formData, unitPrice: value })} className={"form-input"} />
                </div>
              </div>

              <div className="flex  pt-4 px-0  gap-2">
                <div>
                  <AppButton callBackFun={() => saveRecord()} showLoader={savingListedInventory} spinnerClass="inline w-3 h-3 mr-2 text-white animate-spin fill-black" className="btn-primary text-sm py-2.5" text="Proceed" />
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

export default ListInventoryModal;