import React from "react";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
import "./OrmanActivities.css";
import OrmanActivitiesCom from "../../Compnents/Activities/OrmanActivitiesCom";
const OrmanActivities = () => {
  return (
    <div>
      <HeaderPhoto imageUrl="../../../assets/activeback.png" title={"أنشطة اللأورمان/القضاء على الجوع والفقر"}/>
      <OrmanActivitiesCom title={"أنشطة اللأورمان/القضاء على الجوع والفقر"} />
    </div>
  );
};

export default OrmanActivities;
