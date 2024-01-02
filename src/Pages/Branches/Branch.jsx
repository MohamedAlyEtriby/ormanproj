import React from "react";
import "./Branch.css";
const Branch = ({ title, address }) => {
  return (
    <div
      className="w-100 flex p-3 justify-content-between align-items-center textright cardbranch"
      style={{
        minHheight: "10rem",
        border: "1px solid #D9D9D9",
        borderRadius: "1.2rem",
      }}
    >
      <div
        className=" flex-colo justify-content-around align-items-start"
        style={{ width: "60%", height: "10rem" }}
      >
        <div className="">
          <img src="../../../assets/location.png" style={{ width: "2rem" }} />
          <span>{title}</span>
        </div>
        <div className="">{address}</div>
      </div>
      <div style={{ height: "100%" }}>
        <img src="../../../assets/maps.png" alt="" style={{ height: "100%" }} />
      </div>
    </div>
  );
};

export default Branch;
