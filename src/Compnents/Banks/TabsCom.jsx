import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BankTable from "./ElectronicBank";
import "./Tabs.css";
import Mandob from "./Mandob";
import WalletBank from "./WalletBank";
import E2tman from "./E2tman";
const TabsCom = () => {
  const [compIndex, setComIndex] = useState(0);
  const CustomTab = ({ title, onClick }) => {
    return (
      <span
        style={{ cursor: "pointer" }} // Add pointer cursor to indicate it's clickable
        onClick={onClick}
      >
        {title}
      </span>
    );
  };
  const Tabcus = ({ img, title,onClick }) => {
    return (
      <div>
        <div
        onClick={onClick}
        >
          <img
            src={`../../../assets/${img}`}
            alt=""
            style={{ width: "2rem",height: "2rem" }}
          />
        </div>{" "}
        <span>{title}</span>
      </div>
    );
  };
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 thetabs"
      fill
      style={{ width: "42rem" }}
    >
      <Tab
        eventKey="home"
        title={<Tabcus title="بطاقة الائتمان" img={"e2tman.png"} />}
      >
       <E2tman/>
      </Tab>
      <Tab
        eventKey="profile"
        title={
          <Tabcus title="محافظة إلكترونية" onClick={() => setComIndex(0)} img={"mohafzt.png"} />
        }
        style={{ border: "0" }}
        className="bankk"
      >
        <WalletBank setComIndex={setComIndex} compIndex={compIndex} />
      </Tab>
      <Tab eventKey="longer-tab" title={<Tabcus title="حساباتنا في البنوك" img={"hsabat.png"} />}>
        <BankTable />
      </Tab>
      <Tab eventKey="" title={<Tabcus title="إرسال مندوب" img={"delivery.png"} />}>
        <Mandob />
      </Tab>
    </Tabs>
  );
};

export default TabsCom;
