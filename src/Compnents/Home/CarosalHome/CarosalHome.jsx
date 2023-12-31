import React from "react";
// Import Swiper React components
import "./CarosalHome.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Social from "./Social";
// import required modules

export default function CarosalHome() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper swiper2"
        style={{ height: "fit-content", width: "100%" }}
      >
        <div className="bgop">
          <div className="dataOut">
            <div className="dataIn1">
              <img src="../../../assets/5er.png" alt="" className="i5er" />
              {/* <p>
                <span style={{fontWeight:"900"}}>أعمــل خيــر بالتقسيط </span>
                <span style={{fontWeight:"500"}}>شارك في كفالة يتيم بقسط </span>
                <span > شهري <span className="three">300</span> جنية</span>
              </p> */}
            </div>
          
            <div className="dataIn3">
              <Social/>
            </div>
          </div>
        </div>
        <SwiperSlide>
          <img
            src="../../../assets/Rectangle.png"
            alt=""
            className="imageSlide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/Rectangle.png"
            alt=""
            className="imageSlide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../assets/Rectangle.png"
            alt=""
            className="imageSlide"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
