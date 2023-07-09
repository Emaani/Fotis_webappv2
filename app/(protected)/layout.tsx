"use client";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserProfile, selectAuthentication, selectProfileLoadingStatus, unSetSessionExpiry } from "../global/state/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../global/state/hooks";
import { showToastMessage } from "../global/state/features/generalSlice";
import { toast } from "react-toastify";

const ProtectedLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const profileLoadingStatus = useAppSelector(selectProfileLoadingStatus);
    const authenticated = useAppSelector(selectAuthentication)
    const dispatch = useAppDispatch();
    const router = useRouter()
    const userSessionExpired = useAppSelector(state => state.auth.userSessionExpired)

    useEffect(() => {
        if (userSessionExpired === true) {
            dispatch(showToastMessage({
                message: "Session Expired. Login to continue",
                type: "error",
                position: toast.POSITION.TOP_CENTER
            }));
            dispatch(unSetSessionExpiry())
            router.push("/")
        }
    }, [userSessionExpired, dispatch])

    useEffect(() => {
        dispatch(getUserProfile());
    }, []);
    return (< >{children} </>)

    // if (authenticated === false) {
    //     router.push("/")
    //     return
    // } else {
    //     if (authenticated === true) {
    //         return (<MainLayout >{children} </MainLayout>)
    //     } else {
    //         return <AppSpinner />
    //     }
    // } 
}
export default ProtectedLayout;



