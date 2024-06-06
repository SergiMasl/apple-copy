import React from "react";

export default function Model({ model, phoneHandle }) {
  return (
    <div className="sale-detales">
      <h4 className="sale-detales-title">
        Model. <span>Which is best for you?</span>
      </h4>
      <ul className="model-list">
        {model.map((item) => (
          <li
            key={item.model}
            className="chooseModel-btm"
            onClick={() => phoneHandle(item.display, item.model)}
          >
            <div className="model-name">
              <p className="model-name-top-text">{item.model}</p>
              <p className="model-name-lower-text">{item.display}-inch</p>
            </div>
            <div className="model-description">
              <p className="model-description-text">From {item.cost}</p>
              <p className="model-description-text">or {item.cost2}/mo.</p>
              <p className="model-description-text">
                for 24mo.<span>*</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
