import React from "react";
import "./menu.scss";
const Menu = ({ openmenu, setOpenmenu }) => {
  return (
    <>
      <div className={"menu " + (openmenu && "active")}>
        <ul>
          <li>
            <a href="#home" onClick={() => setOpenmenu(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={() => setOpenmenu(false)}>
              Aboutme
            </a>
          </li>
          <li>
            <a href="#project" onClick={() => setOpenmenu(false)}>
              Project
            </a>
          </li>
          <li>
            <a href="#miniproject" onClick={() => setOpenmenu(false)}>
              Mini-Project
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpenmenu(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
