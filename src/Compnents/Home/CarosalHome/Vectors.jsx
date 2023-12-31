import React from "react";
import "./Vector.css";
const Vectors = ({ img, title }) => {
  return (
    <div className="VectorItem">
      <div>
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Vectors;
