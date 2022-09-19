import React from "react";
import "./intro.scss";
import { styled } from "@mui/material/styles";
import { Facebook, GitHub, Instagram } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import phone from "../../img/iPhone 13.png";
const Intro = () => {
  return (
    <div className="introContainer" id="home">
      <div className="leftContainer">
        <div className="title">
          <h4>Hello ,i'm</h4>
        </div>
        <div className="content">
          <h2>Mr. Charin Eawzipo</h2>
          <h3>FRONT-END DEVELOPER | </h3>
          <ul>
            <li>
              <a href="https://web.facebook.com/charin.aewzipo/">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cchariinn/">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://github.com/charinaewzipo">
                <GitHub />
              </a>
            </li>
          </ul>
        </div>
        <div className="button">
          <a href="https://drive.google.com/file/d/1BmDRcQ4fUnIZpgR-jxGHsGLalQvSRc3x/view?usp=sharing">
            <h4>Download CV</h4>
          </a>
        </div>
      </div>
      <div className="rightContainer">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default Intro;
