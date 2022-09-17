import React from "react";
import "./footer.scss";
import logo from "../../img/logo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="first">
          <div className="logo">
            <h4>Let’sFood</h4>
            <img src={logo} alt="" />
          </div>
          <p>Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>
          <ul>
            <li>
              {" "}
              <Instagram />{" "}
            </li>
            <li>
              {" "}
              <Facebook />{" "}
            </li>
            <li>
              {" "}
              <Twitter />{" "}
            </li>
          </ul>
        </div>
        <div className="second">
          <h4>Company</h4>
          <p> About Us</p>
          <p> Career</p>
          <p> How It Work</p>
        </div>
        <div className="third">
          <h4>Policy</h4>
          <p> FAQ</p>
          <p> Privacy</p>
          <p> Shipping</p>
        </div>
        <div className="fourth">
          <h4>Get In Touch</h4>
          <p> +62 896 7311 2766</p>
          <p> food@example.com</p>
        </div>
      </div>
      <div className="bottom">
        <p>© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
