import React from "react";
import OrmanActCard from "../../../Compnents/Activities/OrmanActCard";
import { Container, Row } from "react-bootstrap";
import HeaderPhoto from "../../../Compnents/HeaderPhoto/HeaderPhoto";
import OrmanActivityCard from "./OrmanActivityCard";
import Orman3dAct from "./OrmanAct3d";

const OrmanActivity = ({ title }) => {
  return (
    <>
      <HeaderPhoto imageUrl="../../../../assets/actfakr1.png" />
      <Container fluid="lg">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          أنشطة اللأورمان/القضاء على الجوع والفقر /كراتين رمضان
        </p>
        <Row>
          <OrmanActivityCard
            image="Ramadan.png"
            title="توزيع 20 ألف كيلو لحوم في 10 محافظات على المستحقين"
            description="في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة.
في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقةفي إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة.
في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقةفي إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة.
في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقةفي إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة.
في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة.
في إطار تقديم المساعدة للفئات الأكثر احتياجًا، وزّعنا 20 ألف كيلو لحوم في 10 محافظات على كتير من الأسر المستحقة."
          />
        </Row>
        <Orman3dAct/>
      </Container>

    </>
  );
};

export default OrmanActivity;
