import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { data } from "../../../CarosalHalfData";
import "./CarosalHalf.css";
import PieChart1 from "../Pie/PieChart";
export default function CarosalHalf() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        style={{ height: "100%", width: "100%", margin: "auto" }}
        className="CarosalHalf"
      >
        {data.map((item) => {
          return (
            <SwiperSlide style={{ position: "relative" }}>
              <div className="content">
                <div className="info flex flex-column justify-content-around align-items-center">
                  <p
                    style={{
                      fontSize: "1.8rem",
                      borderBottom: "2px solid #FFC107",
                      fontWeight: "700"
                    }}
                    className="p-1"
                  >
                    {item.title}
                  </p>
                  <div className="flex justify-content-between align-items-center w-100">
                    <div className="flex-colo justify-content-center align-items-center">
                      <div>تم جمع مبلغ </div>
                      <div>8,350</div>
                    </div>
                    <div className="flex-colo justify-content-center align-items-center">
                      <div>المبلغ المراد</div>
                      <div>8,600,000</div>
                    </div>
                  </div>
                  <PieChart1
                    value={item.num ? item.num : 0}
                    size={150}
                    strokewidth={26}
                  />
                </div>
              </div>
              <img src={item.img} alt="" className="Halfimg" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
