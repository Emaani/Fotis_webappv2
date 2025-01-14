"use client"
import { faCartShopping, faLeaf, faList, faPizzaSlice, faShop, faShoppingBasket, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import LineChart from "~/app/global/components/LineChart";
import useReportsRequest from "~/app/global/hooks/requests/useReportsRequest";
import { selectAuthUser } from "~/app/global/state/features/auth/authSlice";
import { useAppSelector } from "~/app/global/state/hooks";
import { addLeadingZero } from "~/app/global/utils/commons";

export default function Home() {
  const { fetchDashboardStats, dashboardStats } = useReportsRequest()
  // UserWallet
  const user = useAppSelector(selectAuthUser)
  console.log(user?.UserWallet)

  useEffect(() => {
    fetchDashboardStats()
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
              <span className=" text-sm flex flex-col justify-end pl-2 opacity-90">Wallet Balance</span>
            </div>
            <div className="flex flex-col justify-end flex-grow mt-5 ">
              <div className="flex ">
                <span className="text-sm font-semibold flex flex-col justify-end pb-[1px] pr-1 opacity-80">UGX</span>
                <span className="font-bold text-xl opacity-80">

                  {
                    (user && user?.UserWallet.length > 0) ?
                      user?.UserWallet[0].walletBalance.toLocaleString() : 0.0
                  }
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
              <span className=" text-sm flex flex-col justify-end pl-2 opacity-90">Inventory</span>
            </div>
            <div className="flex flex-col justify-end flex-grow mt-5 ">
              <div className="flex  gap-1">
                <span className="font-bold text-xl opacity-80">
                  {dashboardStats ? dashboardStats.userInventory : 0}
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
                  {dashboardStats ? dashboardStats.listedInventory : 0}
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
              { name: "Sold", data: [2000, 3000, 5000, 3500, 4000] },
              { name: "Bought", data: [1000, 1500, 1300, 0, 3000] }

            ]}
            categories={["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"]} />
        </div>
      </div>
    </div>
  )
}
