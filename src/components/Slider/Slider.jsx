import React from "react";
import "./slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import miniProject from "../../miniProject";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="SlideContainer" id="miniproject">
      <h1>Mini-Project</h1>
      <div className="circle2"></div>
      <div className="circle1"></div>
      <div className="wrapper">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          partialVisible={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {miniProject?.map((item) => {
            return (
              <div className="item" key={item.id}>
                <a href={item.linkurl}>
                  {" "}
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
