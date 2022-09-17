import React from "react";
import "./intro.scss";
import food from "../../img/food.png";
import pic1 from "../../img/Group 9.png";
const Intro = () => {
  return (
    <div className="intro">
      <img src={pic1} alt="" className="pic1" />
      <div className="left">
        <div className="container">
          <div className="text">
            <h2>Be The Fastest In Delivery Your</h2>
            <h2>Food</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet
          </p>
          <div className="button">
            <p>Get Started</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={food} alt="" />
      </div>
    </div>
  );
};

export default Intro;
