import React from "react";
import "./navbar.scss";
import WidgetsIcon from "@mui/icons-material/Widgets";

import { Close, Mail, Person, Phone } from "@mui/icons-material";

const Navbar = ({ openmenu, setOpenmenu }) => {
  // const { theme, darkmode, setDarkMode } = useContext(ThemeContext);
  // console.log(darkmode);
  // console.log(theme);
  return (
    <div className="navbarContainer">
      <div className="container">
        <div className="left">
          <a href="#home">Portfolio</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>Charin eawizpo (Rin)</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>charin.aewzipo@gmail.com</span>
          </div>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+66 950924619</span>
          </div>
        </div>
        <div className="right">
          {/* <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            className="darkttheme"
            onClick={() => setDarkMode(!darkmode)}
          /> */}
          <div className="iconContainer" onClick={() => setOpenmenu(!openmenu)}>
            {openmenu ? (
              <Close className="icon" />
            ) : (
              <WidgetsIcon className="icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
