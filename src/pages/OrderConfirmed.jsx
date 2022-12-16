import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const OrderConfirmed = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="mx-auto text-center mt-48 flex flex-col items-center gap-5 ">
        <h1 className="font-[500] text-[2rem]">Order Confirmed 🎊</h1>
        <p className="text-[1rem]">Thank you!</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="text-center  mt-24 hover:bg-[#4545c0] hover:text-[#fafafa] text-[#6161ea] p-2 rounded border-2  border-[#6161ea]"
      >
        go back to plans page 
      </button>
      </div>
    </>
  );
};

export default OrderConfirmed;
