import React from "react";
import "./SuccessPart.css";
const SuccessPart = () => {
  const arr = [
    "sidepic.png",
    "ebank.png",
    "cairo.png",
    "sidepic.png",
    "ebank.png",
  ];
  const arr2 = ["trad.png", "cib.png", "grohe.png", "trad.png", "cib.png"];
  return (
    <div className="partner-cont ">
      <h3>شركائنا في النجاح</h3>
        <div className="center1 ">
          {arr.map((item) => {
            return (
              <img
                src={`../../../assets/${item}`}
                alt=""
                style={{ width: "13.8rem", height: "13.8rem" }}
              />
            );
          })}
        </div>
        <div className="center1">
          {arr2.map((item) => {
            return (
              <img
                src={`../../../assets/${item}`}
                alt=""
                style={{ width: "13.8rem", height: "13.8rem" }}
              />
            );
          })}
        </div>
      </div>
  );
};

export default SuccessPart;
