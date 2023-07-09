"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import AppButton from "~/app/global/components/AppButton"
import { selectAccessToken } from "~/app/global/state/features/auth/authSlice"
import { showToastMessage } from "~/app/global/state/features/generalSlice"
import { useAppDispatch, useAppSelector } from "~/app/global/state/hooks"
import useApiRequest from "~/app/global/utils/apiRequest"
import { notEmpty } from "~/app/global/utils/commons"
import { BASE_URL } from "~/app/global/utils/constants"
import useErrorToast from "~/app/global/utils/errorToast"

export default function Home() {
  return (
    <div>
      <div className="card">

        <div className="card-body">
          <div className=" flex">
            <div className=" flex-grow flex flex-col justify-center">
              <p className=" font-medium">Users</p>
            </div>
            <div>
              <button className="btn-primary text-sm py-2.5">New User</button>
            </div>
          </div>
          <table className="w-full text-sm text-left mb-4">
            <thead>
              <tr>
                <th scope="col">Names</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td></td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}



type TypeInviteModalProps = {
  isOpen: boolean,
  onClose: () => void,
  inviteSent: () => void
}
const CreateUserModal = (props: TypeInviteModalProps) => {
  const [email, setEmail] = useState("")
  const [staff_role, setStaffRole] = useState("")
  const [isSaving, setIsSaving] = useState(false);
  const dispatch = useAppDispatch();
  const apiRequest = useApiRequest()
  const accessToken = useAppSelector(selectAccessToken);
  const errorToast = useErrorToast()

  const saveUser = async () => {
    if (!notEmpty(email)) {
      dispatch(showToastMessage({
        message: "Email is missing",
        type: "error",
        position: toast.POSITION.TOP_CENTER
      }));
      return;
    }
    if (!notEmpty(staff_role)) {
      dispatch(showToastMessage({
        message: "Role is missing",
        type: "error",
        position: toast.POSITION.TOP_CENTER
      }));
      return;
    }
    setIsSaving(true)
    await apiRequest({
      method: 'post',
      url: BASE_URL + "/api/user/create",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        staff_role: staff_role,
        email: email,
      }
    }).then((response) => {
      setIsSaving(false)
      dispatch(showToastMessage({
        message: "Invite Sent",
        type: "success",
        position: toast.POSITION.TOP_RIGHT
      }));
      props.inviteSent()
      props.onClose()
    }).catch((error) => {
      errorToast(error);
      setIsSaving(false)
    });
  }

  return (
    <>
      {(props.isOpen) &&
        <div className="modal ">
          <div className=" modal-content modal-md py-4">
            <div className=" flex justify-center">
              <span className="text-center text-lg">Invite Member</span>
            </div>

            <div className=" mt-4">
              <label htmlFor="" className="block text-sm font-medium text-gray-700 ">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-input-2" />
            </div>
            <div className=" mt-4">
              <label htmlFor="" className="block text-sm font-medium text-gray-700 ">Role</label>
              <select onChange={(e) => setStaffRole(e.target.value)} value={staff_role} name="" className="form-input-2" id="">
                <option value="">Select</option>
                <option value="owner">Owner</option>
                <option value="administrator">Administrator</option>
                <option value="operations">Operations</option>
                <option value="developer">Developer / IT</option>
                <option value="customer_support">Customer Support</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="flex flex-row-reverse mt-10 pt-4 px-0  gap-2">
              <div>
                <AppButton callBackFun={() => saveUser()} showLoader={isSaving} spinnerClass="inline w-3 h-3 mr-2 text-prim-yellow animate-spin fill-black" className="prim-btn-2  " text="Send Invite" />
              </div>
              <div>
                <button onClick={() => props.onClose()} type="button" className="btn-secondary-1 ">Close</button>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}


