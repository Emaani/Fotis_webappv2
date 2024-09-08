
export interface Commodity{
    latestPrice: number
    
    id:number,
    name: string
    image: string,
    CommodityPrice:CommodityPrice[]
}

export interface CommodityPrice{
    price: number
    currency:string,
    units:string,
    referenceDate:string,
    commodityId:number
}
