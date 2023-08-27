import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import moment from "moment";
import { sessionExpired } from "../state/features/auth/authSlice";

export const validatePassword =(password:string) =>{
    let minNumberofChars = 8;
    if(password.length < minNumberofChars){
        return false;
    }
    if (!password.match(/[a-z]/g) ||  !password.match(/[A-Z]/g) ||  !password.match(/[0-9]/g) 
    || !password.match(/[!@#$%^&*]/g) ) {
        return false;
    }
    return true;
}

export const isValueEmpty = (value: string | undefined | null) => {
    if (value !== null && value !== undefined && value !== "") {
        return false
    } else {
        return true
    }
}


export const formatDate = (value:string,format:string)=>{
    return moment(value.toString()).format(format);
}

export const isLinkActive = (routes: string[]) => {
    for (const route of routes) {
      if (window.location.href.includes(route)) {
        return "active";
      }
    }
    return "";
}


export const handleSessionExpiration = async (errorResponse:AxiosError, dispatch:ThunkDispatch<unknown, unknown, AnyAction>) => {
    console.log(errorResponse.response?.request.status)
    if (errorResponse.response?.request.status === 401) {
        dispatch(sessionExpired(401));
    }
};
  
  
export const notEmpty =(value:string|undefined|null)=>{
    if (value !== null && value !==undefined && value !=="") {
        return true
    }else{
        return false
    }
}