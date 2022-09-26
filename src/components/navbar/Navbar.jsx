import {
  ChatBubbleOutline,
  DarkModeOutlined,
  Fullscreen,
  LanguageOutlined,
  LightModeOutlined,
  ListOutlined,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";
const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            {darkMode ? (
              <LightModeOutlined
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            ) : (
              <DarkModeOutlined
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            )}
          </div>
          <div className="item">
            <Fullscreen className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1657214059212-104dac959c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
