import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

// components
import ConfirmModal from "../pages/ConfirmOrder";

const PriceCard = ({ data, duration }) => {
  const navigate = useNavigate();

  // computing price
  const price =
    duration === "yearly"
      ? data.price - 1
      : duration === "quarterly"
      ? Math.round(data.price / 4) - 1
      : Math.round(data.price / 12) - 1;

  // time
  const time =
    duration === "yearly"
      ? "1 year"
      : duration === "quarterly"
      ? "3 months"
      : "1 month";

  const handlePay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(
      `/confirm-order/title=${data.title}&price=${price}&duration=${time}`
    );
  };
  return (
    <div
      className={`shadow-lg p-5 bg-[#fefefe] rounded hover:scale-[1.02] transition-all cursor-default h-full w-full place-self-center max-w-[40rem] `}
    >
      <h1 className="text-center h-[20%] font-[600] text-[#4545c0] text-[1.6rem] py-10">
        {data.title}
      </h1>
      <ul className="flex xsm:h-[50%] flex-col gap-2 xsm:gap-4">
        <li className="flex justify-start items-center gap-2">
          <div className="flex items-center gap-4">
            <AiOutlineCheck className="bg-[#47b3547c] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            <p className="font-[600]">
              WhatsApp Group:
              <span className="font-[400] ml-2">
                {data.features.whatsappGroup}
              </span>
            </p>
          </div>
        </li>
        <li className="flex justify-start items-center gap-2">
          <div className="flex items-center gap-4">
            <AiOutlineCheck className="bg-[#47b3547c] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            <p className="font-[600]">
              Basic Medical Queries:{" "}
              <span className="font-[400] ml-2">
                {data.features.basicMedicalQueries}
              </span>
            </p>
          </div>
        </li>
        <li className="flex justify-start items-center gap-2">
          <div className="flex items-center gap-4">
            {data.features.privateChat == "NA" ? (
              <RxCross2 className="bg-[#da756d71] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            ) : (
              <AiOutlineCheck className="bg-[#47b3547c] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            )}
            <p className="font-[600]">
              Private Chat:
              <span className="font-[400] ml-2">
                {data.features.privateChat}
              </span>
            </p>
          </div>
        </li>
        <li className="flex justify-start items-center gap-6">
          {data.features.videoConsultation == "No Free Consultation" ? (
            <RxCross2 className="bg-[#da756d71] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
          ) : (
            <AiOutlineCheck className="bg-[#47b3547c] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
          )}
          <p className="font-[600] -ml-2">
            Video Consultation:
            <span className="font-[400] ml-2">
              {data.features.videoConsultation}
            </span>
          </p>
        </li>
        <li className="flex justify-start items-center gap-2">
          <div className="flex items-center gap-4">
            <AiOutlineCheck className="bg-[#47b3547c] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            <p className="font-[600]">
              Additional Consultations:
              <span className="font-[400] ml-2">
                {data.features.additionalConsultations}
              </span>
            </p>
          </div>
        </li>
        <li className="flex justify-start items-center gap-2">
          <div className="flex items-center gap-4">
            {data.features.growthTracking == "Not Included" ? (
              <RxCross2 className="bg-[#da756d71] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            ) : (
              <AiOutlineCheck className="bg-[#47b3547c] rounded-full h-6 w-6 p-1 min-w-[1.5rem]" />
            )}
            <p className="font-[600]">
              Growth Tracking for baby:
              <span className="font-[400] ml-2">
                {data.features.growthTracking}
              </span>
            </p>
          </div>
        </li>
      </ul>
      <div className="px-1 pt-6 pb-2 h-[30%]  ">
        <p className="pt-3  text-[#4545c0] font-[600] text-[1.6rem]">{`₹ ${price} for ${time}`}</p>
        <button
          className="rounded bg-[#4545c0]  text-[#fafafa] font-[500] mt-1 px-4 py-2 opacity-90 hover:opacity-100"
          onClick={handlePay}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
