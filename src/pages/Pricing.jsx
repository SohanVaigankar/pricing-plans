import React, { useState } from "react";
import { pricingData } from "../data/pricingData";

// components
import Navbar from "../components/Navbar";
import PriceCard from "../components/PriceCard";

const Pricing = () => {
  const [data, setData] = useState(pricingData);
  const [duration, setDuration] = useState("yearly");

  const handleDuration = (e) => {
    e.stopPropagation();
    setDuration(e.target.id);
  };

  return (
    <>
      <Navbar />
      <div className="  px-2 sm:px-5 py-10 w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto flex flex-col items-center  mt-1 ">
        <h2 className="font-[500] text-center text-[1.4rem] sm:text-[1.7rem] lg:text-[2rem]">
          Unlock worry free parenting for you
        </h2>
        <p className="text-[0.85rem] sm:text-[1.05rem] lg:text-[1.2rem] font-[300] text-center">
          Get Pediatrician led holistic care for your baby
        </p>
        <div
          className="  flex justify-between items-center mt-10 border-[1px]  rounded overflow-hidden text-center"
          onClick={handleDuration}
        >
          <div
            id={"monthly"}
            className={`px-3 py-2 w-[5rem] md:w-[7rem] text-[0.8rem] md:text-[1rem]   border-r-[1px] hover:cursor-pointer rounded ${
              duration === "monthly"
                ? `text-[#fafafa] bg-[#4545c0] hover:opacity-90 transition-all`
                : "text-[#4545c0] bg-[#fafafa] hover:bg-[#f1f1f1] transition-all"
            }`}
          >
            Monthly
          </div>
          <div
            id={"quarterly"}
            className={`px-3 py-2 w-[5rem] md:w-[7rem] text-[0.8rem] md:text-[1rem]  border-r-[1px] hover:cursor-pointer rounded ${
              duration === "quarterly"
                ? `text-[#fafafa] bg-[#4545c0] hover:opacity-90 transition-all`
                : "text-[#4545c0] bg-[#fafafa] hover:bg-[#f1f1f1] transition-all"
            }`}
          >
            Quarterly
          </div>
          <div
            id={"yearly"}
            className={`px-3 py-2 w-[5rem] md:w-[7rem] text-[0.8rem] md:text-[1rem] border-r-[1px] hover:cursor-pointer rounded ${
              duration === "yearly"
                ? `text-[#fafafa] bg-[#4545c0] hover:opacity-90 transition-all`
                : "text-[#4545c0] bg-[#fafafa] hover:bg-[#f1f1f1] transition-all"
            }`}
          >
            Yearly
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  2xl:grid-cols-3   px-5 pt-3 pb-2 w-[95%] md:w-[90%] lg:w-[90%] 3xl:w-[80%] mx-auto gap-10 mb-5">
        {data.map((plan) => (
          <PriceCard data={plan} key={plan.id} duration={duration} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
