import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./CarosalHover.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarosalHover.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { datahov } from "./CarosalHovData";
import HoveredInfo from "./HoveredInfo";

export default function CarosalHover() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{ width: "100%", margin: "auto" }}
        className="swipeHover"
        spaceBetween={0}
      >
        {datahov.map((item) => {
          return (
            <SwiperSlide className="position-relative slideflow">
              <HoveredInfo/>
              <img src={item.img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
