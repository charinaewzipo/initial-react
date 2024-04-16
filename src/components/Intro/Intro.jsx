import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { Facebook, GitHub, Instagram } from "@mui/icons-material";
import phone from "../../img/iPhone 13.png";
import { init } from "ityped";
import { Fade, JackInTheBox } from "react-awesome-reveal";
const Intro = () => {
  const textRef = useRef();
  console.log(textRef.current);
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1200,
      strings: [
        "NEXTJS REACTJS",
        "MYSQL Firestore",
        "FLUTTER",
        "Linux Docker",
        "Jenkins",
        "Kubernetes",
      ],
    });
  }, []);

  return (
    <div className="introContainer" id="home">
      <div className="leftContainer">
        <Fade delay={200}>
          <div className="title">
            <h4>Hello I'm </h4>
          </div>
          <div className="content">
            <h2>Mr. Charin Eawzipo</h2>
            <div className="ityped">
              <h3>FRONT-END/FULLSTACK DEVELOPER</h3>
            </div>
            <div style={{ height: "40px", padding: "5px" }}>
              <span ref={textRef}></span>
            </div>
            <ul>
              <li>
                <a href="https://web.facebook.com/charin.aewzipo/">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cchariinn/">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="https://github.com/charinaewzipo">
                  <GitHub />
                </a>
              </li>
            </ul>
          </div>
          <div className="button">
            <a href="https://drive.google.com/file/d/1BmDRcQ4fUnIZpgR-jxGHsGLalQvSRc3x/view?usp=sharing">
              <h4>Download CV</h4>
            </a>
          </div>
        </Fade>
      </div>
      <div className="rightContainer">
        <JackInTheBox>
          <img src={phone} alt="" />
        </JackInTheBox>
      </div>
    </div>
  );
};

export default Intro;
