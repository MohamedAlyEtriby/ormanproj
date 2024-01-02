import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BankTable from "./ElectronicBank";
import './Tabs.css'
import Mandob from "./Mandob";
const TabsCom = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 thetabs"
      fill
      style={{ width: "42rem" }}
    >
      <Tab eventKey="home" title="بطاقة الائتمان">
        بطاقة الائتمان{" "}
      </Tab>
      <Tab eventKey="profile" title="محافظة إلكترونية" style={{border:"0"}} className="bankk">
        <BankTable/>
      </Tab>
      <Tab eventKey="longer-tab" title="حساباتنا في البنوك">
        حساباتنا في البنوك
      </Tab>
      <Tab eventKey="" title="إرسال مندوب">
        <Mandob/>
      </Tab>
    </Tabs>
  );
};

export default TabsCom;
