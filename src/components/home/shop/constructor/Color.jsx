import React, { useState } from "react";

export default function Color({
  phoneHandleColor,
  goBack,
  currentColor,
  goTo,
}) {
  const [cooseColorName, setCooseColorName] = useState(currentColor);
  const [cooseColor, setCooseColor] = useState("#e9e7e4");
  const color = [
    { name: "Natural Titanium", color: "#e9e7e4" },
    { name: "Blue Titanium", color: "#c8cbcf" },
    { name: "White Titanium", color: "#fcfbf9" },
    { name: "Black Titanium", color: "#cccccd" },
  ];
  console.log(cooseColorName);
  const handleColorChange = (name, color) => {
    setCooseColorName(name);
    setCooseColor(color);
  };

  return (
    <div className="sale-detales">
      <h4 className="sale-detales-title">
        Finish. <span>Pick your favorite.</span>
      </h4>
      <p>Color - {cooseColorName}</p>
      <ul className="color-list">
        {color.map((item) => (
          <li key={item.color} className="color-item">
            <input
              type="radio"
              className="color-radio"
              onChange={() => handleColorChange(item.name, item.color)}
              name="color"
              value={item.name}
              checked={cooseColorName === item.name}
            />
            <label
              className={`color-label ${
                cooseColorName === item.name ? "color-focus" : ""
              }`}
              style={{ backgroundColor: item.color }}
            ></label>
          </li>
        ))}
      </ul>
      <div className="shop-btm-direction">
        <button
          className="shop-next"
          onClick={() => {
            phoneHandleColor(cooseColor, cooseColorName);
            goBack(0);
          }}
        >
          Prev
        </button>
        <button
          className={`shop-next ${cooseColorName == "" ? "notAvalable" : ""}`}
          onClick={() => {
            phoneHandleColor(cooseColorName, cooseColorName);
            goTo();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
