import React from "react";
import "./discount.scss";
import pic1 from "../../img/discount.png";
const Discount = () => {
  return (
    <div className="discount">
      <div className="imgContainer">
        <img src={pic1} alt="" />
      </div>
      <div className="text">
        <h2>Join our member and get discount up to 50%</h2>
        <div className="button">
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
