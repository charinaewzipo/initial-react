import React from "react";
import "./aboutme.scss";
import photo from "../../img/pic1.PNG";
import pic1 from "../../img/react.png";
import pic2 from "../../img/htmlcss.png";
import pic3 from "../../img/mysql.png";
import pic4 from "../../img/mongodb.png";
import pic5 from "../../img/docker.png";

const Aboutme = () => {
  return (
    <div className="aboutmeContainer" id="aboutme">
      <div className="leftContainer">
        <img src={photo} alt="" />
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
          <h2>Skill</h2>
          <ul>
            <li>Languages: HTML/CSS ,Javascript</li>
            <li>Frameworks: ReactJS ,NodeJS</li>
            <li>Database: mySQL,MongoDB</li>
            <li>Others: Unix/Linux command</li>
          </ul>
          <div className="code">
            <img src={pic2} alt="" />
            <img src={pic1} alt="" />
            <img src={pic3} alt="" />

            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
          </div>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Aboutme;
