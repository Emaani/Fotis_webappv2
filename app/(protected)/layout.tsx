"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserProfile, selectAuthentication, selectProfileLoadingStatus, unSetSessionExpiry } from "../global/state/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../global/state/hooks";
import { showToastMessage } from "../global/state/features/generalSlice";
import { toast } from "react-toastify";
import AppSpinner from "../global/components/AppSpinner";
import Sidebar from "~/app/global/Sidebar";

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


    useEffect(() => {
        if (authenticated === false) {
            router.push("/login");
        }
    }, [authenticated]);

    if (authenticated === true) {
        return (
            <>
                {children}
            </>
        );
    } else {
        return <AppSpinner />;
    }
}
export default ProtectedLayout;



