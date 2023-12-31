import React from "react";
import { FiEye } from "react-icons/fi";
const HoveredInfo = () => {
  return (
    <div className="position-absolute slideHover">
      <div className="flex-colo justify-content-between h-100  text-white">
        <div className="w-100 text-end">
          <div
            className="bg-success bg-opacity-50  px-2"
            style={{ width: "fit-content" }}
          >
            <p className="m-0">02</p>
            <p>اكتوبر 2023</p>
          </div>
        </div>
        <div className="">
          <FiEye size={60} style={{ color: "white" }} />
        </div>
        <div className="bg-success bg-opacity-50 px-2 py-1 text-end">
          منظمة مصرية أهلية، غير حكومية، لا تهدف إلى الربح ولا تخضع لضرائب على
          التبرعات، أنشئت عام 1993 ... اقرأ المزيد
        </div>
      </div>
    </div>
  );
};

export default HoveredInfo;
