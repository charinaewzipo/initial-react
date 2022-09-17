import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import OurMenu from "./components/OurMenu/OurMenu";
import RatingEl from "./components/Rating/Rating";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
        <Services />
        <OurMenu />
        <RatingEl />
        <Discount />
        <Footer />
      </div>
    </div>
  );
}

export default App;
