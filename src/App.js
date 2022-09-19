import { useState } from "react";
import Aboutme from "./components/Aboutme/Aboutme";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";
import Project from "./components/Project/Project";
import Projectlist from "./components/Projectlist/Projectlist";
function App() {
  const [openmenu, setOpenmenu] = useState(false);
  return (
    <div className="container">
      <Navbar openmenu={openmenu} setOpenmenu={setOpenmenu} />
      <Menu openmenu={openmenu} setOpenmenu={setOpenmenu} />
      <div className="sections">
        <Intro />
        <Aboutme />
        <Projectlist />
        <Slider />
        <Contact />
      </div>
    </div>
  );
}

export default App;
