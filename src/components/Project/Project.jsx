import React from "react";
import "./project.scss";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide } from "react-awesome-reveal";
const Project = ({ title, img, linkurl, id, desc, hint }) => {
  return (
    <div className="projectContainer" id="project">
      <div className={id % 2 === 0 ? "container mod2" : "container"}>
        <div className="left">
          <div className="leftContainer">
            <div className="img">
              <Slide direction={id % 2 === 0 ? "right" : "left"}>
                <a href={linkurl}>
                  <img src={img} alt="" />
                </a>
              </Slide>
            </div>
          </div>
        </div>
        <div className="right">
          <Fade delay={200}>
            <div className="content">
              <div className="header">
                <h2>{title}</h2>
                <div className="button">
                  <a href={linkurl}>
                    <h4>View</h4>
                  </a>
                </div>
              </div>
              <p>{desc}</p>
              {hint ? <span>รหัสทดสอบ {hint}</span> : null}
            </div>
          </Fade>
        </div>
      </div>
      <div className="bordercolor"></div>
    </div>
  );
};

export default Project;
