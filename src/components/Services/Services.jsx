import React from "react";
import "./services.scss";
import pic1 from "../../img/order 1.png";
import pic2 from "../../img/delivery 1.png";
import pic3 from "../../img/courier 1.png";
const Services = () => {
  return (
    <div className="services">
      <div className="content">
        <h4>How it works</h4>
        <h2>What We Serve</h2>
        <p>
          Product Quality Is Our Priority, And Always Guarantees Halal And
          Safety Until It Is In Your Hands.
        </p>
      </div>
      <div className="imgContainer">
        <div className="item">
          <img src={pic1} alt="" />
          <div className="text">
            <h3>Easy To Order</h3>
            <p>You only order through the app</p>
          </div>
        </div>
        <div className="item">
          <img src={pic2} alt="" />
          <div className="text">
            <h3>Fastest Delivery</h3>
            <p>Delivery will be on time</p>
          </div>
        </div>
        <div className="item">
          <img src={pic3} alt="" />
          <div className="text">
            <h3>Best Quality</h3>
            <p>The best quality of food for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
