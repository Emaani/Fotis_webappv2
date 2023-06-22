"use client"

import Link from "next/link";
import { useState } from "react";
import AppButton from "~/app/global/components/AppButton"
import PasswordInput from "~/app/global/components/PasswordInput";

export default function LoginPage() {
    const [password, setPassWord] = useState("");
    const [email, setEmail] = useState("");
    const [isLogingInStatus, setIsLogingInStatus] = useState(false)
    const signIn = () => {

    }
    return (
        <>
            <div className='flex justify-center pt-20'>
                <div className=' sm:w-full md:w-full lg:w-2/3 xl:w-1/2 2xl:w-1/2 3xl:w-1/2 '>
                    <div className="px-5 sm:px-0 md:px-0 lg:px-0">
                        <h1 className=' text-2xl font-bold text-gray-800'>Welcome back</h1>

                        <div className="mt-4">
                            <span className=" text-sm">Don&apos;t have an account? <Link className="underline" href="/register">Sign up</Link></span>
                        </div>

                        <div className="relative mt-3">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="form-input peer" placeholder=" " />
                            <label htmlFor="email" className="form-input-label">Email</label>
                        </div>

                        <div className=" mt-4">
                            <PasswordInput getPasswordValue={(password) => setPassWord(password)} inputClass={"form-input peer"} />
                        </div>


                        <div className=" mt-4 mb-2">
                            <AppButton callBackFun={() => signIn()} showLoader={isLogingInStatus} spinnerClass="inline w-3 h-3 mr-2 text-prim-yellow animate-spin fill-black"
                                className="btn-primary w-full" text="Login" />
                        </div>
                        <div className="mt-3 text-right">
                            <a className=" underline" href="">Reset Password</a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

