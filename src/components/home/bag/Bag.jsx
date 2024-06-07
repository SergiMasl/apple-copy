import React from "react";
import { useContext } from "react";
import BagContext from "../../../Context/BagContext";
import { SlArrowRight } from "react-icons/sl";

import { Link } from "react-router-dom";

export default function Bag() {
  const { items } = useContext(BagContext);

  return (
    <div className="bag-wrap">
      {items.length == 0 ? (
        <div className="bag-is-empty">
          <div className="bag-is-empty-wrap">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-new-arrivals-checkout-201804_FMT_WHH?wid=1472&amp;hei=880&amp;fmt=jpeg&amp;qlt=90&amp;.v=1523551958197" />
            <div className="bag-is-empty-wrap-btms">
              <Link to="" className="shop-btm">
                Shop now <SlArrowRight />
              </Link>
              <h4>Your bag is empty.</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="bag-content-review">
          <div className="top-text">
            <h1> Your bag total is $2,498.00.</h1>
            <p>Free delivery and free returns.</p>
            <Link className="add-to-bag" to="">
              Check Out
            </Link>
          </div>

          <div className="bag-item">
            {items.map((product) => {
              console.log(product.cost);
              return (
                <div className="bag-wrapper">
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=800&hei=800&fmt=jpeg&qlt=90&fit=constrain&.v=1692893981483" />
                  <div className="bag-item-content">
                    <p>iPhone 15 Pro 128GB Blue Titanium</p>
                  </div>
                  <div className="bag-item-price">
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
