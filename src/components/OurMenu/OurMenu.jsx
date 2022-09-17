import React from "react";
import "./ourmenu.scss";
import pic1 from "../../img/food1.png";
import pic2 from "../../img/food2.png";
import pic3 from "../../img/food3.png";
import pic4 from "../../img/food4.png";
import { Favorite } from "@mui/icons-material";
const OurMenu = () => {
  return (
    <div className="ourmenu">
      <div className="content">
        <h4>Our menu</h4>
        <h2>Our Popular Menu</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
      </div>
      <div className="imgContainer">
        <div className="card">
          <div className="img">
            <img src={pic1} alt="" />
          </div>
          <div className="text">
            <p>Mie Ramen</p>
            <p>lorem ipsum</p>
          </div>
          <div className="cost">
            <p>$20.2</p>
            <Favorite className="icon active" />
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={pic2} alt="" />
          </div>
          <div className="text">
            <p>Mie Ramen</p>
            <p>lorem ipsum</p>
          </div>
          <div className="cost">
            <p>$20.2</p>
            <Favorite className="icon" />
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={pic3} alt="" />
          </div>
          <div className="text">
            <p>Mie Ramen</p>
            <p>lorem ipsum</p>
          </div>
          <div className="cost">
            <p>$20.2</p>
            <Favorite className="icon" />
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={pic4} alt="" />
          </div>
          <div className="text">
            <p>Mie Ramen</p>
            <p>lorem ipsum</p>
          </div>
          <div className="cost">
            <p>$20.2</p>
            <Favorite className="icon" />
          </div>
        </div>
      </div>
      <div className="button">
        <p>More menu</p>
      </div>
    </div>
  );
};

export default OurMenu;
