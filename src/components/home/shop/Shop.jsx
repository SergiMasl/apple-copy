import React, { useState } from "react";
import "./shop.sass";
import ServiceAd from "./ads/ServiceAd";
import Model from "./constructor/Model";
import Color from "./constructor/Color";
import Storage from "./constructor/Storage";
import TotalPhone from "./constructor/TotalPhone";

export default function Shop() {
  const [myPhone, setMyPhone] = useState({
    display: "",
    model: "",
    color: "",
    colorName: "",
    storage: "",
    cost: "",
  });
  const [stepOfSell, setStepOfSell] = useState(1);

  const iPhones = {
    id: "15-pro",
    preCost: [
      { model: "iPhone 15 Pro", display: "6.1", cost: 999, cost2: 41.62 },
      { model: "iPhone 15 Pro Max", display: "6.7", cost: 1199, cost2: 49.95 },
    ],

    //   {
    //     gb: 256,
    //     content: {
    //       name: "iPhone 15 Pro",
    //       type: [
    //         { type: "sm", display: 6.1, cost: 999, cost2: 41.62 },
    //         { type: "bg", display: 6.7, cost: 1199, cost2: 49.95 },
    //       ],
    //       color: ["#e9e7e4", "#c8cbcf", "#fcfbf9", "#cccccd"],
    //     },
    //   },
    // ],
  };

  const phoneHandle = (display, model) => {
    setMyPhone((prevPhone) => ({
      ...prevPhone,
      display: display,
      model: model,
    }));
    setStepOfSell(stepOfSell + 1);
  };
  const phoneHandleColor = (color, name) => {
    setMyPhone((prevPhone) => ({
      ...prevPhone,
      color: color,
      colorName: name,
    }));
  };
  const goBack = () => {
    setStepOfSell(stepOfSell - 1);
  };
  const goTo = () => {
    setStepOfSell(stepOfSell + 1);
  };
  const phoneHandleStorages = (storage, cost) => {
    setMyPhone((prevPhone) => ({
      ...prevPhone,
      storage: storage,
      cost: cost,
    }));
  };

  return (
    <div className="shop">
      <div className="shop-wrap">
        <ServiceAd />
        <div className="my-phone">
          <p>
            Your iPhone: {myPhone.display} {myPhone.model} {myPhone.colorName}{" "}
            {myPhone.storage}
          </p>
        </div>
        <section className="iPhone-wrap">
          <h2 className="iphone-title">
            Buy {myPhone.model == "" ? `iPhone ${iPhones.id}` : myPhone.model}
          </h2>
          <div className="shop-container">
            <div className="img-wrap">
              <img
                className="img-item"
                src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1"
              />
            </div>
            {stepOfSell == 1 && (
              <Model model={iPhones.preCost} phoneHandle={phoneHandle} />
            )}
            {stepOfSell == 2 && (
              <Color
                phoneHandleColor={phoneHandleColor}
                goBack={goBack}
                goTo={goTo}
                currentColor={myPhone.colorName}
              />
            )}
            {stepOfSell == 3 && (
              <Storage
                model={myPhone.model}
                phoneHandleStorages={phoneHandleStorages}
                goBack={goBack}
                currentStorage={myPhone.storage}
                currentCost={myPhone.cost}
                goTo={goTo}
              />
            )}
            {stepOfSell == 4 && (
              <TotalPhone goBack={goBack} myPhone={myPhone} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
