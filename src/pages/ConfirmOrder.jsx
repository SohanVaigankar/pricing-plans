import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const { title, price, duration } = useParams();

  // handleConfirm
  const handleConfirm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/order-confirmed");
  };

  // handleCancel
  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="p-5 w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex justify-center  items-center py-10 mt-20 ">
        <div className="flex flex-col items-center  mx-auto w-[100%] sm:w-[75%] lg:w-[60%] 2xl:w-[40%]  rounded shadow-lg">
          <p className="w-full text-center px-2 py-2 text-[1.5rem] border-b-[1px] text-[#4545c0]">
            Confirm Order?
          </p>
          <div className="flex flex-col   px-10 py-10 text-[1.1rem] w-full gap-5 font-[500]">
            <h3>{`Plan: ${title}`}</h3>
            <p>{`Duration: ${duration}`}</p>
            <p>{`Cost: ₹ ${price} /-`}</p>
          </div>
          <div className="flex justify-between items-center w-full p-5">
            <button
              onClick={handleCancel}
              className="text-[#fafafa] bg-[#ea4d4d] px-3 py-2 rounded opacity-70 hover:opacity-95"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className=" text-[#fafafa] bg-[#4545c0] px-3 py-2 rounded opacity-90 hover:opacity-100"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
