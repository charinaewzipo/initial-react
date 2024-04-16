import { useEffect, useState } from "react";
import Aboutme from "./components/Aboutme/Aboutme";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import 'animate.css';
import Contact from "./components/Contact/Contact";
import Slider from "./components/Slider/Slider";
import Projectlist from "./components/Projectlist/Projectlist";
import PreLoader from "./components/PreLoader";
function App() {
  //  Preloader
  const [isLoading, setIsLoading] = useState(true);
  const [openmenu, setOpenmenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <div className="container">
      <Navbar openmenu={openmenu} setOpenmenu={setOpenmenu} />
      <Menu openmenu={openmenu} setOpenmenu={setOpenmenu} />
      <div className="sections">
        <Intro />
        <Aboutme />
        <Projectlist />
        <Slider />
        {/* <Contact /> */}
      </div>
    </div>
  );
}

export default App;
