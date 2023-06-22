"use client"

import Link from "next/link";
import { useState } from "react";
import AppButton from "~/app/global/components/AppButton"
import PasswordInput from "~/app/global/components/PasswordInput";

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isRegistering, setIsRegistering] = useState(Boolean)
    const [isLogingInStatus, setIsLogingInStatus] = useState(false)
    const signUp = () => {

    }
    return (
        <>
            <div className='flex justify-center pt-20'>
                <div className=' sm:w-full md:w-full lg:w-2/3 xl:w-1/2 2xl:w-1/2 3xl:w-1/2 '>
                    <div className="px-5 sm:px-0 md:px-0 lg:px-0">
                        <h1 className=' text-2xl font-bold text-gray-800'>Create your  account</h1>
                        <div className="mt-4">
                            <span className="text-sm">Already have an account? <Link className=" underline" href="/login">Log in</Link></span>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                            <div className="relative">
                                <input onChange={(e) => setFirstName(e.target.value)} type="text" id="first_name" className="form-input peer" placeholder=" " />
                                <label htmlFor="first_name" className="form-input-label">First name</label>
                            </div>

                            <div className="relative">
                                <input onChange={(e) => setLastName(e.target.value)} type="text" id="last_name" className="form-input peer" placeholder=" " />
                                <label htmlFor="last_name" className="form-input-label">Last name</label>
                            </div>
                        </div>

                        <div className="relative mt-4">
                            <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="form-input peer" placeholder=" " />
                            <label htmlFor="email" className="form-input-label">Email</label>
                        </div>

                        <div className=" mt-4">
                            <PasswordInput getPasswordValue={(password) => setPassword(password)} inputClass={"form-input peer"} />
                        </div>


                        <div className=" mt-4 mb-3">
                            <AppButton callBackFun={() => signUp()} showLoader={isRegistering} spinnerClass="inline w-3 h-3 mr-2 text-prim-yellow animate-spin fill-black" className="btn-primary w-full " text="Sign in" />
                        </div>
                        <p className=" text-gray-600 text-sm">
                            By creating an account, you agree to Fotis Agro&apos;s <a className=" underline" href="">Terms of Use</a> and consent to Fotis Agro&apos;s <a className=" underline" href="">Privacy Policy</a>.
                        </p>

                    </div>

                </div>
            </div>
        </>
    )
}
