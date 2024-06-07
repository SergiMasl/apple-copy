import React, { useContext, useState } from "react";
import "./summary.sass";
import Deliver from "../../../assece/deliver.svg";
import BagContext from "../../../Context/BagContext";
import { Link } from "react-router-dom";
import { PiTruckThin } from "react-icons/pi";

export default function PhoneSummary({
  myPhone,
  isCashOptions,
  isServiseChoosen,
}) {
  const { setLastAddedProduct, setItems } = useContext(BagContext);
  const addToBag = (product) => {
    setItems((prevProducts) => [...prevProducts, product]);
  };

  const addTempBag = (product) => {
    setLastAddedProduct(product);
  };

  return (
    <div
      className={`summary ${isServiseChoosen != "" ? "summary-visible" : ""}`}
    >
      <div className="summary-wrap">
        <div className="summary-wrap-left">
          <h2>Your new</h2>
          <h2>{myPhone.model}</h2>
          <p>Just the way you want it.</p>
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select_AV2?wid=724&hei=488&fmt=p-jpg&qlt=95&.v=1693080284693" />
        </div>
        <div className="summary-wrap-center">
          <div className="summary-wrap-center-content">
            <p className="summary-wrap-center-phonedescription">
              {myPhone.model} {myPhone.colorName}
            </p>
            <p>${myPhone.cost}</p>
          </div>
          <div className="summary-wrap-center-content">
            <p>{isCashOptions && "One-time payment"}</p>
          </div>
        </div>
        <div className="summary-wrap-rigth">
          <div className="summary-wrap-rigth-truck">
            <PiTruckThin />

            <div className="summary-wrap-rigth-text">
              <h4>Delivery:</h4>
              <p>In Stock Free Shipping</p>
            </div>
          </div>
          <Link
            to="/apple-copy/bag"
            className="phone-add"
            onClick={() => {
              addTempBag(myPhone);
              addToBag(myPhone);
            }}
          >
            Add to Bag
          </Link>
        </div>
      </div>
    </div>
  );
}
