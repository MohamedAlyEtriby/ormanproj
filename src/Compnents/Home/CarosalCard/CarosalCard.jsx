import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarosalCard.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";


import CardItem from "./CardItem";

export default function CarosalCard() {
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
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{ height: "fit-content", width: "80%", margin: "auto" }}
        className=" swipe "
        spaceBetween={30}
      >
        <SwiperSlide className="swipeima">
          <CardItem
            img="../../../assets/health.png"
            title="الصحة الجيدة والرفاه"
            desc="منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا....اقرأ المزيد"
          />
        </SwiperSlide >
        <SwiperSlide className="swipeima">
          <CardItem
            img="../../../assets/modon.png"
            title={
              "المدن والمجتمعات المستدامة وتوفير المياه النظيفة والصرف الصحي"
            }
            desc="منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا....اقرأ المزيد"
          />
        </SwiperSlide >
        <SwiperSlide className="swipeima">
          <CardItem
            img="../../../assets/health.png"
            title="القضاء على الجوع والفقر"
            desc="منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا....اقرأ المزيد"

          />
        </SwiperSlide>{" "}
        <SwiperSlide className="swipeima">
          <CardItem img="../../../assets/health.png" 
            desc="منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا....اقرأ المزيد"
            title="القضاء على الجوع والفقر"
           
           />
        </SwiperSlide>
        <SwiperSlide className="swipeima">
          <CardItem img="../../../assets/health.png" 
            desc="منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على التبرعات، أنشئت عام 1993 مقيدة برقم 803 مركزية بوزارة التضامن الاجتماعي، تهدف إلى خدمة الفئات الأكثر احتياجًا....اقرأ المزيد"
            title="القضاء على الجوع والفقر"
            
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
