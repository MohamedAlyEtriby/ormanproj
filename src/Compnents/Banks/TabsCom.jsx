import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BankTable from "./ElectronicBank";
import './Tabs.css'
const TabsCom = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
      style={{ width: "42rem" }}
    >
      <Tab eventKey="home" title="Home">
        بطاقة الائتمان{" "}
      </Tab>
      <Tab eventKey="profile" title="Profile" style={{border:"0"}} className="bankk">
        <BankTable/>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        حساباتنا في البنوك
      </Tab>
    </Tabs>
  );
};

export default TabsCom;
