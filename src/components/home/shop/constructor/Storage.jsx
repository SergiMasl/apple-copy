import React, { useState } from "react";

export default function Storage({
  model,
  phoneHandleStorages,
  goBack,
  currentStorage,
  currentCost,
  goTo,
}) {
  const [chosentStorage, setChosentStorage] = useState(currentStorage);
  const [chosentCost, setChosentCost] = useState(currentCost);
  const [activeBtm, setactiveBtm] = useState(currentStorage);

  function checkStorage(model1) {
    const storage = [
      {
        model: "iPhone 15 Pro",
        storage: [
          { gb: "128GB", cost: "999" },
          { gb: "256GB", cost: "1099" },
          { gb: "512GB", cost: "1299" },
          { gb: "1TB", cost: "1499" },
        ],
      },
      {
        model: "iPhone 15 Pro Max",
        storage: [
          { gb: "256GB", cost: "1199" },
          { gb: "512GB", cost: "1399" },
          { gb: "1TB", cost: "1599" },
        ],
      },
    ];
    return storage.find((item) => item.model === model1);
  }

  const phone = checkStorage(model);

  return (
    <div className="sale-detales">
      <h4 className="sale-detales-title">
        Storage Options. <span>Pick your favorite.</span>
      </h4>
      {phone ? (
        <ul className="storage-list">
          {phone.storage.map((option) => (
            <li
              key={option.gb}
              className={`chooseModel-btm ${
                option.gb == activeBtm ? "chooseModel-btm-active" : ""
              }`}
              onClick={() => {
                setChosentStorage(option.gb);
                setChosentCost(option.cost);
                setactiveBtm(option.gb);
              }}
            >
              <div className="model-name">
                <p className="model-name-top-text">{option.gb}</p>
              </div>
              <div className="model-description">
                <p className="model-description-text">From {option.cost}</p>
                <p className="model-description-text">
                  or {Math.round(option.cost / 24)}/mo.
                </p>
                <p className="model-description-text">
                  for 24mo.<span>*</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No storage options available for this model.</p>
      )}
      <div className="shop-btm-direction">
        <button
          className="shop-next"
          onClick={() => {
            {
              goBack();
              phoneHandleStorages(chosentStorage, chosentCost);
            }
          }}
        >
          Prev
        </button>
        <button
          className="shop-next"
          onClick={() => {
            phoneHandleStorages(chosentStorage, chosentCost);
            goTo();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
