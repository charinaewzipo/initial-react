import React from "react";
import "./project.scss";

const Project = ({ title, img, linkurl, id, desc, hint }) => {
  return (
    <div className="projectContainer" id="project">
      <div className={id % 2 === 0 ? "container mod2" : "container"}>
        <div className="circle2"></div>
        <div className="circle1"></div>
        <div className="left">
          <a href={linkurl}>
            <img src={img} alt="" />
          </a>
        </div>
        <div className="right">
          <div className="content">
            <div className="header">
              <h2>{title}</h2>
              <div className="button">
                <a href={linkurl}>
                  <h4>view</h4>
                </a>
              </div>
            </div>
            <p>{desc}</p>
            <span>รหัสทดสอบ {hint}</span>
          </div>
        </div>
      </div>
      <div className="bordercolor"></div>
    </div>
  );
};

export default Project;
