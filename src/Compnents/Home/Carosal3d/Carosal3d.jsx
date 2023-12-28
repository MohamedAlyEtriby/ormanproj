import React, { useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import './Carosal3d.css'
const FeaturesCarousel = ({ goToSlide, setGoToSlide }) => {
  const [offsetRadius, setOffsetRadius] = React.useState(2);
  const [showNavigation, setShowNavigation] = React.useState(false);
  const data = [
    "../../../assets/cairo.png",
    "../../../assets/cib.png",
    "../../../assets/ebank.png",
    "../../../assets/cairo.png",
    "../../../assets/cib.png",
    "../../../assets/ebank.png",
 
  ]; // Updated to contain paths to five different images
  useEffect(() => {
    const handleResize = () => {
      // Adjust offsetRadius based on screen width
      if (window.innerWidth <= 700) {
        setOffsetRadius(0);
      } else {
        setOffsetRadius(2);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set offsetRadius based on the initial screen width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const sliders = data?.map((imagePath, index) => {
    return {
      key: index,
      content: (
        <div key={index} className="divimage">
          <img
            src={imagePath}
            alt={`mage ${index + 1}`}
            style={{ width: "100%", height: "100%",objectFit:"cover" }}
          />
        </div>
      ),
      onClick: () => setGoToSlide(index),
    };
  });

  return (
    <div className="mb-4">
        <h2 className="mb-5">شركائنا في النجاح</h2>
      <div className="main-bg" >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height:"15rem",
            width:"80%",
            margin:"0px auto"
          }}
          className="slidercon"
        >
          <RxDoubleArrowRight
          size={30}
            className="gallery-arrows"
            onClick={() => setGoToSlide(goToSlide + 1)}
          />

          <div className="home-gallery-img" style={{ height:"100%",width:"100%" }}>
            <Carousel
              slides={sliders}
              goToSlide={goToSlide}
              offsetRadius={offsetRadius}
              showNavigation={showNavigation}
            />
          </div>
          <RxDoubleArrowLeft
            className="gallery-arrows"
            size={30}
            onClick={() => setGoToSlide(goToSlide - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
