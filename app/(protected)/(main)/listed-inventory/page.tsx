"use client"
import { faCartShopping, faLeaf, faList, faPizzaSlice, faShop, faShoppingBasket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppSpinner from "~/app/global/components/AppSpinner";
import LineChart from "~/app/global/components/LineChart";
import TableDropDown from "~/app/global/components/TableDropDown";
import useInventoryRequest from "~/app/global/hooks/requests/useInventoryRequest";

export default function InventoryPage() {
  const { listedInventory, fetchListedInventory, isFetching } = useInventoryRequest()

  useEffect(() => {
    fetchListedInventory()
  }, [])


  return (
    <div>
      <div className=" flex justify-end">
        <div className=" flex flex-col justify-center flex-grow">
          <p className=" font-semibold opacity-80 text-lg" >Listed Inventory</p>
        </div>
      
      </div>
      <div className="card shadow-lg mt-3">
        <div className=" card-body pb-6">
          <table className="w-full text-sm text-left mb-4 mt-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">QTY LISTED</th>
                <th scope="col">UNIT PRICE</th>
                <th>Listed</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                listedInventory.map((item, key) =>
                  <tr key={key}>
                    <td>{item.Inventory.name}</td>
                    <td>{item.quantity}</td>
                    <td className=" max-w-[200px]">{item.unitPrice.toLocaleString()}</td>
                 
                    <td>
                      <TableDropDown labelClass={"btn-secondary px-1 py-[5px] text-xs font-medium text-gray-600 bg-white border "}
                        items={
                          [
                            { title: "Un List" },
                            { title: "Delete" }
                          ]
                        } />
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>
          {
            (listedInventory.length == 0 && isFetching === false) &&
            <p className="text-center mt-6 text-sm">No records yet!</p>
          }
          {
            isFetching && <AppSpinner />
          }

       
        </div>
      </div>
    </div>
  )
}
