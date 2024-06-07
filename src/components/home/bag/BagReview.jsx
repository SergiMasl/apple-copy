import React from "react";
import "./bag.sass";
import { Link } from "react-router-dom";
import BagContext from "../../../Context/BagContext";
import { useContext } from "react";

export default function BagReview() {
  const { lastAddedProduct } = useContext(BagContext);
  return (
    <div className="bag-wrap">
      <div className="bag-bg">
        <div className="bag-content-review">
          <h2>{lastAddedProduct.model}</h2>
        </div>
      </div>
      <div className="bag-bg">
        <div className="bag-content-review-content">
          <div className="bag-content-review-left">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=200&hei=200&fmt=png-alpha&.v=1692893981483" />
            <div className="bag-text">
              <h3>{`${lastAddedProduct.model} ${lastAddedProduct.storage} ${lastAddedProduct.colorName}`}</h3>
              <p>One-time payment</p>
            </div>
          </div>
          <div className="bag-content-review-right">
            <Link className="add-to-bag-rewiew" to="/apple-copy/cart">
              Review Bag
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
