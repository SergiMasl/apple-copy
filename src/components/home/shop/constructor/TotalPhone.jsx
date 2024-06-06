import React from "react";

export default function TotalPhone({ goBack, myPhone }) {
  return (
    <div className="sale-detales">
      <h4 className="sale-detales-title">
        Almost done. <span>Check your iPhone.</span>
      </h4>
      <p>Model: {myPhone.model}</p>
      <p>Display: {myPhone.display}-inch</p>
      <p>
        Color: {myPhone.colorName} <span>{myPhone.color}</span>
      </p>
      <p>Storage: {myPhone.storage}</p>
      <p>Cost: ${myPhone.cost}</p>
      <div className="shop-btm-direction">
        <button className="shop-next" onClick={() => goBack()}>
          Prev
        </button>
      </div>
    </div>
  );
}
