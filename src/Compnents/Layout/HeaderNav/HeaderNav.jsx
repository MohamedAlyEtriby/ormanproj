import React from "react";
import "./HeaderNav.css";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HeaderNav = () => {
  return (
    <div className="header flex col" dir="rtl">
      <div className="flex">
        <div> طرق اخري للتبرع | &nbsp; </div>
        <div> <Link to={"/Banks"}>حساباتنا في البنوك</Link> | &nbsp;</div>
        <div>
          <Link to="/Branches">فروعنا</Link>
        </div>
      </div>
      <div className="flex">
        <div>En |</div>
        <Link to="/Login"> &nbsp; تسجيل الدخول &nbsp;</Link>
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
