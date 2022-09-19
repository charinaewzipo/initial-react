import React from "react";
import "./aboutme.scss";
import photo from "../../img/pic1.PNG";
const Aboutme = () => {
  return (
    <div className="aboutmeContainer" id="aboutme">
      <div className="leftContainer">
        <img src={photo} alt="" />
        <div className="circle2"></div>
      </div>
      <div className="rigtContainer">
        <div className="content">
          <h2>About me</h2>
          <h4>
            An experienced system engineer with skills build ,manage, analyze
            operation systems,application software and database I want to change
            career job because of the work , it doesn't match my lifestyle{" "}
          </h4>
          <h4>
            I am looking for an opportunity for career advancement Frontend
            developer or Backend developer where i can grow and continue to
            learn from other experience team members
          </h4>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Aboutme;
