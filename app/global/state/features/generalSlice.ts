"use client"

import { createSlice } from "@reduxjs/toolkit";
import { ToastPosition, toast } from "react-toastify";

export type TypeToastData = {
    message: string
    type: string
    position: ToastPosition
}

 type TypeState ={
    toastData:TypeToastData,
    showToast:boolean
}

const initialState:TypeState ={
    toastData:{
        message:"",
        type: "",
        position: toast.POSITION.TOP_RIGHT
    },
    showToast:false
}

const generalSlice = createSlice({
    initialState:initialState,
    name:"general",
    reducers:{
        showToastMessage(state,actions: { payload: TypeToastData; type: string;}){
            state.showToast = true;
            state.toastData = actions.payload
        },
        unSetToast(state,actions){
            state.showToast = false;
            state.toastData = {
                message:"",
                type: "",
                position: toast.POSITION.TOP_RIGHT
            }
        }
    }
})

export const {
    showToastMessage,unSetToast
} = generalSlice.actions
export default generalSlice.reducer