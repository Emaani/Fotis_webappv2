"use client"
import { faArrowDown, faArrowUp, faCartShopping, faLeaf, faList, faPizzaSlice, faShop, faShoppingBasket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import AppSpinner from "~/app/global/components/AppSpinner";
import TableDropDown from "~/app/global/components/TableDropDown";
import useCommodityRequest from "~/app/global/hooks/requests/useCommodityRequest";
import { Commodity } from "~/app/global/types/commodity";
import NewCommodityModal from "./NewCommodity";
import { getLatestPriceInfo } from "~/app/global/utils/helpers/commodities_helper";
import NewPriceModal from "./NewCommodityPrice";

export default function CommoditiesPage() {
  const { commodity, fetchCommodity, isFetching } = useCommodityRequest()
  const [selectedCommodity, setSelectedCommodity] = useState<Commodity | null>(null)
  const [showNewCommodityPriceModal, setShowNewCommodityPriceModal] = useState(false)
  const [showNewCommodityModal, setShowNewCommodityModal] = useState(false)

  useEffect(() => {
    fetchCommodity()
  }, [])

  const newCommodityPriceClicked = (commodity: Commodity) => {
    setSelectedCommodity(commodity)
    setShowNewCommodityPriceModal(true)
  }
  return (
    <div>
      <div className=" flex justify-end">
        <div className=" flex flex-col justify-center flex-grow">
          <p className=" font-semibold opacity-80 text-lg" >Commodities</p>
        </div>
        <button onClick={() => setShowNewCommodityModal(true)} className="btn-primary-2 text-sm py-2.5 rounded-lg">New Commodity</button>
      </div>
      <div className="card shadow-lg mt-3">
        <div className=" card-body pb-6">
          <table className="w-full text-sm text-left mb-4 mt-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Current Price</th>
                <th scope="col">Change</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                commodity.map((item, key) =>
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>
                      <span className={`flex mt-2 gap-0.5 ${getLatestPriceInfo(item).percentageChange > 0 ? 'text-green-600' : "text-red-600"}`}>
                        <span className={` text-lg`}>{getLatestPriceInfo(item).latestPrice.toLocaleString()}</span>
                        <span className='flex flex-col justify-center '>
                          {
                            getLatestPriceInfo(item).percentageChange > 0 ?
                              <FontAwesomeIcon width={10} icon={faArrowUp} /> :
                              <FontAwesomeIcon width={10} icon={faArrowDown} />
                          }
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className={`flex mt-1 gap-1 ${getLatestPriceInfo(item).percentageChange > 0 ? 'text-green-600' : "text-red-600"}`}>
                        <span className='text-xs'>  {getLatestPriceInfo(item).priceChange.toLocaleString()} ({getLatestPriceInfo(item).percentageChange.toFixed(1)}%)</span>
                      </span>
                    </td>
                    <td>
                      <div className=" w-full flex justify-end">
                        <TableDropDown labelClass={"btn-secondary px-1 py-[5px] text-xs font-medium text-gray-600 bg-white border "}
                          items={
                            [
                              { title: "New Price", onClick: () => newCommodityPriceClicked(item) },
                              { title: "Update" },
                              { title: "Delete" }
                            ]
                          } />
                      </div>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>
          {
            (commodity.length == 0 && isFetching === false) &&
            <p className="text-center mt-6 text-sm">No records yet!</p>
          }
          {
            isFetching && <AppSpinner />
          }
          <NewCommodityModal isOpen={showNewCommodityModal}
            onClose={() => setShowNewCommodityModal(false)}
            commodityCreated={() => {
              fetchCommodity()
              setShowNewCommodityModal(false)
            }}
          />

          <NewPriceModal isOpen={showNewCommodityPriceModal}
            onClose={() => setShowNewCommodityPriceModal(false)}
            priceCreated={() => {
              fetchCommodity();
              setShowNewCommodityPriceModal(false);
            }} commodity={selectedCommodity} />
        </div>
      </div>
    </div>
  )
}
