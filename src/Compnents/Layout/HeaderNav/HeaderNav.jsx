import React from "react";
import "./HeaderNav.css";
import { FaUser } from "react-icons/fa6";
const HeaderNav = () => {
  return (
    <div className="header flex col" dir="rtl">
      <div className="flex">
        <div> طرق اخري للتبرع | &nbsp; </div>
        <div> حساباتنا في البنوك | &nbsp;</div>
        <div>فروعنا</div>
      </div>
      <div className="flex">
        <div>En |</div>
        <div> &nbsp; تسجيل الدخول  &nbsp;</div>
        <div style={{ marginTop: "rem" }}>
          <FaUser />
        </div>
        <div>
          <img
            src="../../../assets/orman.png"
            alt=""
            style={{ width: "7rem", marginRight: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
