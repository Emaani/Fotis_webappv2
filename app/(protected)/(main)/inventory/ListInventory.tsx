import { useState } from "react"
import { toast } from "react-toastify"
import useValidateFormFields, { IFormData } from "~/app/global/hooks/validate/validateFormFields"
import { showToastMessage } from "~/app/global/state/features/generalSlice"
import { useAppDispatch } from "~/app/global/state/hooks"

interface FormData extends IFormData {
    officer_id: number | null,
    title: string,
    description: string,
    status: string,
    start_date: string | null,
    end_date: string | null,
  }
  
  type TypeNewListedInventoryModalProps = {
    isOpen: boolean,
    onClose: () => void,
    recordCreated: () => void
  }
  const NewListedInventoryModal = (props: TypeNewListedInventoryModalProps) => {
    const { isFormFieldEmpty } = useValidateFormFields()
    const { savingListedInventory, saveListedInventoryDetails } = useListedInventoryRequest()
    const dispatch = useAppDispatch()
  
    const [formData, setFormData] = useState<FormData>({
      officer_id: null,
      title: "",
      description: "",
      status: "",
      start_date: null,
      end_date: null
    });
  
    const saveRecord = async () => {
      if (isFormFieldEmpty("officer_id", formData, "officer")) return
      if (isFormFieldEmpty("title", formData, "title")) return
      if (isFormFieldEmpty("status", formData, "status")) return
      if (isFormFieldEmpty("start_date", formData, "start date")) return
      if (isFormFieldEmpty("end_date", formData, "end date")) return
  
      try {
        const response = await saveListedInventoryDetails(formData)
        dispatch(showToastMessage({
          message: "Inventory  Created ",
          type: "success",
          position: toast.POSITION.TOP_RIGHT
        }));
        props.recordCreated()
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
                  <span className="text-center text-lg">New ListedInventory Record</span>
                </div>
                <div>
                  <FontAwesomeIcon onClick={()=> props.onClose()} className=" cursor-pointer" size="lg" icon={faClose}/>
                </div>
              </div>
  
              <div className="px-4 pb-5 h-[80vh] overflow-y-auto ">
                <div className="w-2/3">
                  <div className="w-full mt-4 relative">
                    <label htmlFor="" className="form-label-1 ">Officer</label>
                    <div className="">
                      <OfficersDropDown
                        onSelect={(value) => setFormData({ ...formData, officer_id: value })} />
                    </div>
                  </div>
                  <div className=" w-full mt-4">
                    <label htmlFor="" className="form-label-1 ">Title</label>
                    <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} type="text" placeholder="Enter title" className="form-input" />
                  </div>
                  <div className="w-full mt-4 ">
                    <label htmlFor="lastName" className="form-label-1 ">Status</label>
                    <select
                      value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      name="" className="form-input" id="">
                      <option value="">Select</option>
                      <option value="pending_approval">Pending Approval</option>
                      <option value="approved">approved</option>
                      <option value="ended">ended</option>
                      <option value="rejected">rejected</option>
                    </select>
                  </div>
  
  
                  <div className=" w-full mt-4 grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="lastName" className="form-label-1 ">Start</label>
                      <input
                        value={formData.start_date ? formData.start_date : ""} onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                        type="date" className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label-1 ">End</label>
                      <input
                        value={formData.end_date ? formData.end_date : ""} onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                        type="date" className="form-input" />
                    </div>
                  </div>
  
                  <div className=" w-full mt-4">
                    <label htmlFor="" className="form-label-1 ">Description</label>
                    <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} name="" id="" className="form-input" cols={30} rows={5}></textarea>
                  </div>
                </div>
  
                <div className="flex  mt-10 pt-4 px-0  gap-2">
                  <div>
                    <AppButton callBackFun={() => saveRecord()} showLoader={savingListedInventory} spinnerClass="inline w-3 h-3 mr-2 text-white animate-spin fill-black" className="btn-primary text-sm py-2.5" text="Save Record" />
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