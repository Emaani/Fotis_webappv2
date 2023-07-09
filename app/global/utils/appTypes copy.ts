
export type TypeAppStatus = "idle" | "pending" | "error" | "success";

export type TypeDispatchResponse = {
    error?: any
    payload?: any
}

export type TypeErrorResponse = { message: string, status: string }

export type TypeFinancialAccount = {
    name: string,
    official_name: string,
    account_id:string,
    subtype: string,
    type: string,
    mask: string,
    balances: {
        available: number,
        current: number,
        iso_currency_code: string
    }
    institutionId:string,
    institution: {
        name: string,
    }
}

export declare enum TransactionPaymentChannelEnum {
    Online = "online",
    InStore = "in store",
    Other = "other"
}

export type TypePlaidTransaction = {
    amount: number
    iso_currency_code: string
    date: string
    payment_channel: TransactionPaymentChannelEnum
    name: string,
    category: string[] | null,
    merchant_name?: string
    original_description?: string
}

export type GroupedResponse ={
    label:string,
    total:number,
    monthlyAvg:number,
    percentage:number
}

export type Profile= {
    _id: string;
    userId?: string;
    name?: string;
    email?: string;
    location?: string;
    isStudent?: boolean;
    isSubscribed?: boolean;
    avatarUrl?: string;
    firstName?: string;
    lastName?: string;
    createdAt?: Date;
    updatedAt?: Date;
}