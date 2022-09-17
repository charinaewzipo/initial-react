import React from "react";
import "./navbar.scss";
import logo from "../../img/logo.png";
import IconButton from "@mui/material/IconButton";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { Mail, Search, ShoppingCart } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <h3>Let'sFood</h3>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li className="active">Home</li>
        <li>Menu</li>
        <li>How it works</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="right">
        <Search className="search" />

        <Badge badgeContent={4} color="primary" className="badge">
          <ShoppingCart color="action" />
        </Badge>
        <div className="button">
          <LogoutIcon />
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
