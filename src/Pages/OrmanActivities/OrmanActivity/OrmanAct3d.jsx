import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
// import required modules
import "./OrmanAct3d.css";

export default function Orman3dAct() {
    
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 3,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        
        modules={[
          EffectCoverflow,
          Pagination,
          Mousewheel,
          Keyboard,
          Navigation,
          Autoplay
        ]}
        className="mySwiper car3d"
        style={{ height: "fit-content", width: "100%" }}
      >
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="../../../../assets/Rectangle.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
