import React from "react";

export default function ServesOption({ setIsServiseChoosen }) {
  return (
    <div className="paymet-servise-wrap">
      <div
        className="paymet-option-wrap"
        onClick={() => setIsServiseChoosen("att")}
      >
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-step1-logo-att?wid=126&hei=52&fmt=png-alpha&.v=1702327819531" />
      </div>
      <div
        className="paymet-option-wrap"
        onClick={() => setIsServiseChoosen("tmobile")}
      >
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-step1-logo-tmobile?wid=134&hei=52&fmt=png-alpha&.v=1656633929455" />
      </div>
      <div
        className="paymet-option-wrap"
        onClick={() => setIsServiseChoosen("verizon")}
      >
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-step1-logo-verizon?wid=138&hei=52&fmt=png-alpha&.v=1656633929554" />
      </div>
      <div
        className="paymet-option-wrap"
        onClick={() => setIsServiseChoosen("self")}
      >
        <p>Connect to any carrier later</p>
      </div>
    </div>
  );
}
