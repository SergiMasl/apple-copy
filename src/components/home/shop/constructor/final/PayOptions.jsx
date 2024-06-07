import React from "react";

export default function PayOptions({
  myPhone,
  setIsCashOptions,
  isCashOptions,
}) {
  return (
    <ul className="paymet-option-wrap">
      <li className="paymet-option-item" onClick={() => setIsCashOptions(true)}>
        <div className="paymet-option-content">
          <h5>Buy</h5>
          <p>${myPhone.cost}</p>
        </div>
        <p className="paymet-option-content--info">
          Pay with Apple Pay or other payment methods.
        </p>
      </li>
      <li
        className="paymet-option-item"
        onClick={() => setIsCashOptions("credit")}
      >
        <div className="paymet-option-content">
          <h5>Finance</h5>
          <p>
            ${Math.round(myPhone.cost / 24)}{" "}
            <span>
              /mo. for 24 mo.<span>*</span>
            </span>
          </p>
          <p>
            From ${Math.round(myPhone.cost / 36)}
            <span>/mo. for 36 mo. with a carrier</span>
          </p>
        </div>
        <p className="paymet-option-content--info">Pay over time at 0% APR.</p>
      </li>
    </ul>
  );
}
