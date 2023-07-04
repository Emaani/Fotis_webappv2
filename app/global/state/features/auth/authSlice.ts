// "use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"
import { TypeAppStatus } from "~/app/global/utils/appTypes"
import { APP_STATUS, BASE_URL } from "~/app/global/utils/constants"
import { RootState } from "../../store"
import { getAccessTokenFromStorage } from "~/app/global/utils/appHelpers"


export type TypeUser={
    id: number,
    email:string,
    first_name:string,
    last_name:string,
}
type AuthInitialStateType ={
    user?:TypeUser
    accessToken:string
    isLogingInStatus:TypeAppStatus,
    isLogingOut:boolean,
    profileLoadingStatus:string,
    authenticated:boolean | undefined
    loginErrors: string[],
    userSessionExpired:boolean,
}

type loginBodyType ={
    email:string,
    password:string
}

const authInitialState:AuthInitialStateType ={
    user:undefined,
    accessToken: getAccessTokenFromStorage()|| '',
    isLogingInStatus:"idle",
    isLogingOut:false,
    profileLoadingStatus:"idle",
    authenticated:undefined,
    loginErrors:[],
    userSessionExpired:false
}

export const getUserProfile = createAsyncThunk("auth/getUserProfile", async(_,{getState})=>{
    const auth_token = selectAccessToken(getState() as RootState);
    const response = await axios.get(BASE_URL+"/api/users/profile/",{
        headers: {
            Authorization: 'Bearer '+auth_token,
        }
    })
    return response.data.data
})

export const authenticateUser = createAsyncThunk("auth/authenticateUser", async(data:loginBodyType,{rejectWithValue})=>{
    try {
        const response = await axios({
            method: 'post',
            url: BASE_URL+"/api/auth/login/",
            data:data
        })
        return response.data.data
    } catch (error) {
        
        const errorResponse = error as AxiosError;
        if (errorResponse.response) {
            const data = errorResponse.response.data as {message:string, status:string};
            return rejectWithValue(data.message);
        }else{
            return rejectWithValue("Failed. Something went wrong");
        }
    }
});


const authSlice = createSlice({
   name:"auth",
   initialState:authInitialState,
   reducers:{
    sessionExpired(state,actions){
        state.userSessionExpired = true
        console.log("Show Login Dialog")
    },
    unSetSessionExpiry(state){
        state.userSessionExpired = false
    },
   },
   extraReducers:(builder)=>{
    builder
    .addCase(getUserProfile.pending,(state,action)=>{
        state.profileLoadingStatus = APP_STATUS.PENDING
    })
    .addCase(getUserProfile.rejected,(state,action)=>{
        state.profileLoadingStatus = APP_STATUS.ERROR
        state.authenticated =false
        console.log(action)
    })
    .addCase(getUserProfile.fulfilled,(state,action)=>{
        state.authenticated =true
        state.profileLoadingStatus = APP_STATUS.SUCCESS
        state.user= action.payload;
        state.accessToken 
    })
    .addCase(authenticateUser.pending,(state,action)=>{
        state.isLogingInStatus =APP_STATUS.PENDING
    })
    .addCase(authenticateUser.fulfilled,(state,action)=>{
        state.authenticated =true
        state.isLogingInStatus =APP_STATUS.SUCCESS
        state.user= action.payload['user'];
        state.accessToken= action.payload['accessToken'];
        localStorage.setItem("accessToken",state.accessToken)
    })
    .addCase(authenticateUser.rejected,(state,action)=>{
        state.isLogingInStatus = APP_STATUS.ERROR
        state.loginErrors =[]
        state.loginErrors.push(action.payload as string)
    })
   }
});

export const {
    sessionExpired,unSetSessionExpiry
}= authSlice.actions
export default authSlice.reducer

export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export const selectAuthentication = (state:RootState)=> state.auth.authenticated

export const selectProfileLoadingStatus = (state:RootState)=> state.auth.profileLoadingStatus