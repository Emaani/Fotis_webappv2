
export interface User{
    id: number,
    email:string,
    firstName:string,
    lastName:string,
    UserWallet:UserWallet[]
}

export interface UserWallet {
    id?:number
    userId:number
    walletBalance:number
    currency:string,
}
