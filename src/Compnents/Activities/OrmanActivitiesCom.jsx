import React from "react";
import { Container, Row } from "react-bootstrap";
import PersonCard from "../Personcard/PersonCard";
import OrmanActCard from "./OrmanActCard";

const arr = [
  {
    title: "كراتين رمضان",
    image: "Ramadan.png",
  },
  {
    title: "لحوم الاضاحي",
    image: "Adha.png",
  },
  {
    title: "ذبح خروف أو عجل",
    image: "5rof.png",
  },
  {
    title: "إعانة اسر فقيرة ",
    image: "poor.png",
  },
  {
    title: "وجبات إفطار ساخنة",
    image: "ftar.png",
  },
];
const OrmanActivitiesCom = ({ title }) => {
  return (
    <Container fluid="lg">
      <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
        {title}
      </p>
      <Row className="">
        {arr.map(({ image, title }, index) => {
          return <OrmanActCard title={title} image={image} id={index} />;
        })}
      </Row>
    </Container>
  );
};

export default OrmanActivitiesCom;
