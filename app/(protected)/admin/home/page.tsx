"use client"
import { faCartShopping, faLeaf, faList, faPizzaSlice, faShop, faShoppingBasket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import LineChart from "~/app/global/components/LineChart";
import useCommodityRequest from "~/app/global/hooks/requests/useCommodityRequest";
import useReportsRequest from "~/app/global/hooks/requests/useReportsRequest";
import { addLeadingZero } from "~/app/global/utils/commons";

export default function Home() {
  const { fetchDashboardStats, dashboardStats } = useReportsRequest()
  const { commodity, fetchCommodity, isFetching } = useCommodityRequest()

  useEffect(() => {
    fetchDashboardStats()
    fetchCommodity()
  }, [])
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <div className="card border shadow-lg ">
          <div className="card-body px-2 h-full  flex flex-col">
            <div className="flex">
              <div>
                <FontAwesomeIcon size={"2x"} width={23} className=" text-gray-700 block h-auto" icon={faWallet} />
              </div>
              <span className=" text-sm flex flex-col justify-end pl-2 opacity-90">User Wallets</span>
            </div>
            <div className="flex flex-col justify-end flex-grow mt-5 ">
              <div className="flex ">
                <span className="text-sm font-semibold flex flex-col justify-end pb-[1px] pr-1 opacity-80">UGX</span>
                <span className="font-bold text-xl opacity-80">
                  0.0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card border shadow-lg ">
          <div className="card-body px-2 h-full  flex flex-col">
            <div className="flex">
              <div>
                <FontAwesomeIcon size={"2x"} width={23} className=" text-gray-700 block h-auto" icon={faLeaf} />
              </div>
              <span className=" text-sm flex flex-col justify-end pl-2 opacity-90">Commodities</span>
            </div>
            <div className="flex flex-col justify-end flex-grow mt-5 ">
              <div className="flex  gap-1">
                <span className="font-bold text-xl opacity-80">
                  {commodity.length}
                </span>
                <span className="text-sm font-semibold flex flex-col justify-end pb-[1px] pr-1 opacity-80">items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card border shadow-lg ">
          <div className="card-body px-2 h-full  flex flex-col">
            <div className="flex">
              <div>
                <FontAwesomeIcon size={"2x"} width={23} className=" text-gray-700 block h-auto" icon={faShop} />
              </div>
              <span className=" text-sm flex flex-col justify-end pl-2 opacity-90">Listed</span>
            </div>
            <div className="flex flex-col justify-end flex-grow mt-5 ">
              <div className="flex  gap-1">
                <span className="font-bold text-xl opacity-80">
                  {dashboardStats ? dashboardStats.listedInventory: 0}
                </span>
                <span className="text-sm font-semibold flex flex-col justify-end pb-[1px] pr-1 opacity-80">items</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card border shadow-lg ">
          <div className="card-body px-2 h-full  flex flex-col">
            <div className="flex">
              <div>
                <FontAwesomeIcon size={"2x"} width={23} className=" text-gray-700 block h-auto" icon={faCartShopping} />
              </div>
              <span className=" text-sm flex flex-col justify-end pl-2 opacity-90">Listed</span>
            </div>
            <div className="flex flex-col justify-end flex-grow mt-5 ">
              <div className="flex">
                
                <span className="text-sm flex flex-col justify-end pb-[1px] pr-1 opacity-80">view agro product orders </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="card shadow-lg mt-3">
        <div className=" card-body">
          <LineChart
            series={[
              { name: "Sales", data: [2000, 3000, 5000, 3500, 4000] },
              { name: "Purchases", data: [1000, 1500, 1300, 0, 3000] }

            ]}
            categories={["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"]} />
        </div>
      </div>
    </div>
  )
}
