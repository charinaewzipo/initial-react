import React from "react";
import "./aboutme.scss";
import photo from "../../img/pic1.PNG";
import pic1 from "../../img/react.png";
import pic2 from "../../img/htmlcss.png";
import pic3 from "../../img/mysql.png";
import pic4 from "../../img/mongodb.png";
import pic5 from "../../img/docker.png";
import { Fade, Slide } from "react-awesome-reveal";
const Aboutme = () => {
  return (
    <div className="aboutmeContainer" id="aboutme">
      <div className="leftContainer">
        <Fade delay={200}>
          <img src={photo} alt="" />
        </Fade>
      </div>
      <div className="rigtContainer">
        <div className="content">
          <Fade delay={300} cascade damping={0.2}>
            <h2>About me</h2>
            <h4>
              Seeking a Front-End/FullStack Developer position where I can apply my skills in React
              Frameworks to create responsive web interfaces. Eager to grow into a Fullstack
              Developer role and contribute to the success of a forward-thinking company. Passionate
              about working in a flexible environment that supports hybrid or remote work
              arrangements.
            </h4>
            <h2>Skill</h2>
            <div style={{ width: "100%" }}>
              <ul style={{ display: "flex" }}>
                <li style={{ flex: 1 }}>
                  Frontend
                  <ul>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Redux</li>
                    <li>CSS Frameworks (e.g., Tailwind, Bootstrap, MUI, SCSS)</li>
                    <li>Flutter</li>
                  </ul>
                </li>
                <li style={{ flex: 1 }}>
                  Backend
                  <ul>
                    <li>Node.js,Java spring boot (Basic)</li>
                  </ul>
                </li>
              </ul>
              <ul style={{ display: "flex" }}>
                <li style={{ flex: 1 }}>
                  Database
                  <ul>
                    <li>mySQL , CloudFirestore(NoSQL)</li>
                    <li>ORM (e.g., Prisma, Sequelize)</li>
                  </ul>
                </li>
                <li style={{ flex: 1 }}>
                  Other skills
                  <ul>
                    <li>Git tools Linux command Docker Jenkins Kubernetes (Basic)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* <div className="code">
            <img src={pic2} alt="" />
            <img src={pic1} alt="" />
            <img src={pic3} alt="" />

            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
          </div> */}
          </Fade>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Aboutme;
