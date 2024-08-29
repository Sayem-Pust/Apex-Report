"use client";
import React, { useState } from "react";
import ModalContainer from "./ModalContainer";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Row {
  id: number;
  line_item_name: string;
  store: string;
  runners_name: string;
  transaction_date: Date | null;
  amount: number;
  card_number: number;
}

const PurchaseModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<Row[]>([
    {
      id: Date.now(),
      line_item_name: "",
      store: "",
      runners_name: "",
      amount: 0,
      card_number: 0,
      transaction_date: null,
    },
    {
      id: Date.now() + 1, // Ensure unique ID
      line_item_name: "",
      store: "",
      runners_name: "",
      amount: 0,
      card_number: 0,
      transaction_date: null,
    },
  ]);

  const handleInputChange = (id: number, field: keyof Row, value: string) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow: Row = {
      id: Date.now(),
      line_item_name: "",
      store: "",
      runners_name: "",
      amount: 0,
      card_number: 0,
      transaction_date: null,
    };
    setRows([...rows, newRow]);
  };

  const handleChange =
    (id: number, field: keyof Row) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(id, field, event.target.value);
    };

  const handleDateChange =
    (id: number, field: keyof Row) => (date: Date | null) => {
      if (date) {
        handleInputChange(id, field, date.toISOString().split("T")[0]);
      }
    };

  const deleteRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const closeModel = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-start text-[#2563EB] text-[36px] font-[600]">
          Material Purchase
        </p>
        <button
          onClick={() => setOpen(true)}
          className="mt-0 lg:!mt-10 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400"
        >
          Add Material Purchase
        </button>
      </div>
      <ModalContainer open={open} closeModal={closeModel}>
        <div className="pr_overlay fixed left-0 top-0 h-full w-full overflow-x-hidden overflow-y-auto bg-[rgba(0,0,0,0.5)] z-20">
          <div className="modal_dialog relative w-auto transform-none 2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[950px] md:max-w-[700px] sm:max-w-[500px] xs:max-w-[400px] xxs:max-w-[340px] sm:min-h-[calc(100%_-_3.5rem)] min-h-[calc(100%_-_1rem)] flex items-center my-8 mx-auto">
            <div className="relative flex flex-col w-full pointer-events-auto bg-blue-500 bg-clip-padding rounded-lg">
              {/* Modal Header */}
              <div className="flex justify-center items-center p-4 bg-blue-500 text-white rounded-t-lg relative">
                <h2 className="text-xl font-[600] text-[20px]">Material Purchase</h2>
                <span
                  className="inline-flex justify-center items-center h-8 w-8 rounded-full bg-black bg-opacity-80 absolute -top-1 -right-1 z-50 cursor-pointer"
                  id="em_close"
                  onClick={closeModel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>

              <div className="e_modal_body bg-white rounded-lg p-6">
                <div className="modal-text">
                  <div className="container mx-auto p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-300 shadow-md">
                        <thead>
                          <tr>
                            <th className="font-[600] text-[12px] text-[#545454] py-2 px-4 border-b capitalize">
                              Items
                            </th>
                            <th className="font-[600] text-[12px] text-[#545454] py-2 px-4 border-b capitalize">
                              Store
                            </th>
                            <th className="font-[600] text-[12px] text-[#545454] py-2 px-4 border-b">
                              Runner&apos;s Name
                            </th>
                            <th className="font-[600] text-[12px] text-[#545454] py-2 px-4 border-b capitalize">
                              Amount
                            </th>
                            <th className="font-[600] text-[12px] text-[#545454] py-2 px-4 border-b capitalize">
                              Card No.
                            </th>
                            <th className="font-[600] text-[12px] text-[#545454] py-2 px-4 border-b capitalize">
                              Transaction Date
                            </th>
                            <th className="py-2 px-4 border-b"></th>{" "}
                            {/* Column for Delete Button */}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, index) => (
                            <tr
                              key={row.id}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-[#E5E7EB]"
                              }
                            >
                              <td className="py-2 px-4 border-b">
                                <input
                                  type="text"
                                  value={row.line_item_name}
                                  onChange={handleChange(
                                    row.id,
                                    "line_item_name"
                                  )}
                                  className="w-full min-w-[80px] px-2 py-1 font-[600] text-[12px] text-[#545454] border border-gray-300 rounded"
                                />
                              </td>
                              <td className="py-2 px-4 border-b">
                                <input
                                  type="text"
                                  value={row.store}
                                  onChange={handleChange(row.id, "store")}
                                  className="w-full min-w-[80px] px-2 py-1 font-[600] text-[12px] text-[#545454] border border-gray-300 rounded"
                                />
                              </td>
                              <td className="py-2 px-4 border-b">
                                <input
                                  type="text"
                                  value={row.runners_name}
                                  onChange={handleChange(
                                    row.id,
                                    "runners_name"
                                  )}
                                  className="w-full min-w-[80px] px-2 py-1 font-[600] text-[12px] text-[#545454] border border-gray-300 rounded"
                                />
                              </td>
                              <td className="py-2 px-4 border-b flex justify-center items-center">
                                $
                                <input
                                  type="number"
                                  value={row.amount}
                                  onChange={handleChange(row.id, "amount")}
                                  className="w-full min-w-[80px] px-2 py-1 font-[600] text-[12px] text-[#545454] border border-gray-300 rounded"
                                />
                              </td>
                              <td className="py-2 px-4 border-b">
                                <input
                                  type="number"
                                  value={row.card_number}
                                  onChange={handleChange(row.id, "card_number")}
                                  className="w-full min-w-[80px] px-2 py-1 font-[600] text-[12px] text-[#545454] border border-gray-300 rounded"
                                />
                              </td>
                              <td className="py-2 px-4 border-b">
                                <DatePicker
                                  className="w-full min-w-[80px] pl-2 py-1 font-[600] text-[12px] text-[#545454] border border-gray-300 rounded text-sm"
                                  showIcon
                                  placeholderText="Select Date"
                                  selected={row.transaction_date}
                                  onChange={handleDateChange(
                                    row.id,
                                    "transaction_date"
                                  )}
                                />
                              </td>
                              <td className="py-2 border-b text-center">
                                <button
                                  onClick={() => deleteRow(row.id)}
                                  className="text-[#A9A9A9] py-1 px-2 rounded hover:bg-red-600"
                                >
                                  <i>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="size-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                      />
                                    </svg>
                                  </i>
                                </button>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td colSpan={5}></td>{" "}
                            <td className="py-1 px-3 flex justify-end shadow-md">
                              <button
                                onClick={addRow}
                                className="bg-blue-500 text-white py-1 px-3 rounded-full hover:bg-blue-600"
                              >
                                <span className="text-xl">+</span>
                              </button>
                            </td>
                            <td></td>{" "}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        // onClick={handleSave}
                        className="bg-[#2563EB] text-white w-[113px] h-[46px] rounded hover:bg-blue-600 font-[600] text-[14px]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default PurchaseModal;
