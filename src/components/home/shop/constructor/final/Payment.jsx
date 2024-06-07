import React, { useState } from "react";
import "./paymet.sass";
import ServesOption from "./ServesOption";
import PayOptions from "./PayOptions";

export default function Payment({
  myPhone,
  stepOfSell,
  setIsServiseChoosen,
  isServiseChoosen,
  isCashOptions,
  setIsCashOptions,
  isServiseOptions,
  setServiseOptions,
}) {
  return (
    <div className={`paymet-wrap ${stepOfSell == 4 ? "activePay-wrap" : ""}`}>
      <div className="paymet-wrapper ">
        <h3 className="paymet-title">
          Payment options. Select the one that works for you.
        </h3>
        <PayOptions
          myPhone={myPhone}
          setIsCashOptions={setIsCashOptions}
          isCashOptions={isCashOptions}
        />
      </div>

      <div className={`paymet-wrapper-sub ${isCashOptions ? "activePay" : ""}`}>
        <h3 className="paymet-title">Connectivity. Choose a carrier.</h3>
        <ServesOption setIsServiseChoosen={setIsServiseChoosen} />
      </div>

      {/* <div
        className={`paymet-wrapper-sub ${isServiseChoosen ? "activePay" : ""}`}
      >
        <h3 className="paymet-title">
          AppleCare+ coverage. Protect your new iPhone.
        </h3>
        <div className="paymet-option-wrap">
            <div className="apple-care-plan">

            </div>
        </div>
      </div> */}
    </div>
  );
}
