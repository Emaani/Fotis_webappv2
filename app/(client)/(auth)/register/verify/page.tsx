"use client";
import Link from "next/link";
import AppButton from "@/global/components/AppButton";
import { useEffect, useState } from "react";
import { useAppDispatch } from "~/app/global/state/hooks";
import { showToastMessage } from "~/app/global/state/features/generalSlice";
import { toast } from "react-toastify";
import { BASE_URL } from "~/app/global/utils/constants";
import axios, { AxiosError } from "axios";
import PinInput from "~/app/global/components/PinInput";
import { useRouter } from "next/navigation";
import useErrorToast from "~/app/global/utils/errorToast";


export default function VerifyAccountPage() {

  const [isVerifying, setIsVerifying] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const [otpCode, setOtpCode] = useState("");
  const [email, setEmail] = useState<string | null>("")
  const router = useRouter();
  const dispatch = useAppDispatch();
  const errorToast = useErrorToast()

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setEmail(searchParams.get('email'))
  }, [])

  const resendOtp = async () => {
    setIsResending(true);
    try {
      const response = await axios({
        method: 'post',
        url: BASE_URL + "/api/auth/resend-token",
        data: {
          email: email,
        }
      })
      setIsResending(false);
      dispatch(showToastMessage({
        message: "OTP Sent ",
        type: "success",
        position: toast.POSITION.TOP_RIGHT
      }));
    } catch (error) {
      setIsResending(false);
      dispatch(showToastMessage({
        message: "Something went wrong ",
        type: "error",
        position: toast.POSITION.TOP_RIGHT
      }));
    }
  }

  const verifyOtp = async () => {
    if (otpCode === "") {
      toast.error("OTP is Required", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    setIsVerifying(true);
    try {
      const response = await axios({
        method: 'post',
        url: BASE_URL + "/api/auth/verify/",
        data: {
          email: email,
          code: otpCode,
        }
      })
      setIsVerifying(false);
      toast.success("Account Verified", {
        position: toast.POSITION.TOP_RIGHT
      });
      router.push("/login")
    } catch (error) {
      errorToast(error);
      setIsVerifying(false);
    }
  }




  return (
    <>
      <div className=' h-screen flex flex-col justify-center  horizontal-padding overflow-y-auto'>
        <div className='flex justify-center'>
          <div className='sm:w-full md:w-full lg:w-2/3 xl:w-1/2 2xl:w-1/2 3xl:w-1/2 '>
            <div className="px-5 sm:px-0 md:px-0 lg:px-0 ">
              <h1 className=' text-2xl font-semibold text-gray-700'>Verify Email</h1>

              <p className='mt-5 text-gray-600 text-sm'>We emailed you a six-digit code to <span className=" text-gray-800 font-semibold"> {email}</span>. Enter the code below to confirm your email address.
                <a onClick={() => resendOtp()} className="pl-1 font-semibold underline" href="#">{isResending ? "Please wait..." : "Resend Code"} </a></p>

              <div className=" mt-4">
                {/* <label className=" text-sm" htmlFor="email">OTP</label> */}
                <PinInput getValue={(otp) => setOtpCode(otp)} className="form-input text-center" />
              </div>
              <div className=" mt-4 mb-2">
                <AppButton callBackFun={() => verifyOtp()} showLoader={isVerifying} spinnerClass="inline w-3 h-3 mr-2 text-prim-yellow animate-spin fill-black" className="btn-primary w-full " text="Verify" />
              </div>
              <div className=" mt-10">
                <p className=" text-center text-xs">
                  <span className=" ">© 2023 Maxint Inc</span>
                  <span className="pl-1 text-purple-800">  Terms</span>  |   <span className=" text-purple-800" >  Privacy Policy</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}


