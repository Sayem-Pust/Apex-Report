'use client'
import PurchaseModal from "@/components/PurchaseModal";
import React from "react";

const Dashboard = () => {
  return (
    <aside className="">
      <div className="m-3">
        <PurchaseModal />

        <div className="overflow-x-scroll">
          <table className="table-auto  w-full border-separate border-spacing-1 border  custom-table-data my-2">
            <thead className="text-center">
              <tr className="bg-[#2563EB99] bg-opacity-[60%] text-white ">
                <th className="font-[600] text-[12px] px-2 py-3 uppercase">
                  Items
                </th>
                <th className="font-[600] text-[12px] px-2 py-3 uppercase">
                  Store
                </th>
                <th className="font-[600] text-[12px] px-2 py-3 ">
                  Runner&apos;s Name
                </th>
                <th className="font-[600] text-[12px] px-2 py-3 uppercase">
                  Amount
                </th>
                <th className="font-[600] text-[12px] px-2 py-3 uppercase">
                  Card No.
                </th>
                <th className="font-[600] text-[12px] px-2 py-3 uppercase">
                  {" "}
                  Transaction Date
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="bg-white">
                <td className="custom-table-data px-2 py-3">Item One</td>
                <td className="custom-table-data px-2 py-3 ">Dummy Store</td>
                <td className="custom-table-data px-2 py-3">Md. Sayem</td>
                <td className="custom-table-data px-2 py-3">$100</td>
                <td className="custom-table-data px-2 py-3">58642</td>
                <td className="custom-table-data px-2 py-3">01 Aug, 2024</td>
              </tr>
              <tr className="bg-[#2563EB1A]">
                <td className="custom-table-data px-2 py-3">Item One</td>
                <td className="custom-table-data px-2 py-3 ">Dummy Store</td>
                <td className="custom-table-data px-2 py-3">Md. Sayem</td>
                <td className="custom-table-data px-2 py-3">$100</td>
                <td className="custom-table-data px-2 py-3">58642</td>
                <td className="custom-table-data px-2 py-3">01 Aug, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  );
};

export default Dashboard;
