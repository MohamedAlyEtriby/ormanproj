import React from "react";
import { Container, Row } from "react-bootstrap";
import PersonCard from "../Personcard/PersonCard";
import OrmanActCard from "./OrmanActCard";

const OrmanActivitiesCom = ({ title }) => {
  return (
    <Container fluid="lg">
      <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
        {title}
      </p>
      <Row className="flex">
        <OrmanActCard title="كراتين رمضان" image="Ramadan.png" />
        <OrmanActCard title="لحوم الاضاحي" image="Adha.png" />
        <OrmanActCard title="ذبح خروف أو عجل" image="5rof.png" />
        <OrmanActCard title="إعانة اسر فقيرة " image="poor.png" />
        <OrmanActCard title=" ستر ودفا" image="dfa.png" />
        <OrmanActCard title="وجبات إفطار ساخنة" image="ftar.png" />
      </Row>
    </Container>
  );
};

export default OrmanActivitiesCom;
