import { User } from "./user"
import { Warehouse } from "./warehouse"
export interface Inventory{
    id:number
    name: string
    quantity:number,
    units:string,
    description:string,
    image: string,
    commodityId:number,
    userId:number,
    warehouseId:number,
    User:User
    Warehouse?:Warehouse
}


