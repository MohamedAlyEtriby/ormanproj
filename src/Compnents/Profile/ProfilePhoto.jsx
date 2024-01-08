import React from "react";
import "./ProfilePhoto.css";
const ProfilePhoto = () => {
  return (
    <div className="w-100  d-flex align-items-center mb-5 flex-wrap profphoto">
      <div>
        <img
          src="../../../assets/profileph.png"
          alt=""
          style={{ height: "10rem" }}
        />
      </div>
      <div className="mx-2">
        <div>
          <p style={{ fontSize: "2.2rem", fontWeight: "1000" }} className="m-0">حسن محمد سعد</p>
        </div>
        <div>
          <p style={{fontSize: "2.2rem"}} className="m-0">متبرع</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
