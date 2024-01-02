import React from "react";
import "./Branches.css";
import { Col, Container, Row } from "react-bootstrap";
import Branch from "./Branch";
import HeaderPhoto from "../../Compnents/HeaderPhoto/HeaderPhoto";
const Branches = () => {
  return (
    <>
      <HeaderPhoto imageUrl="../../../assets/activeback.png" />

      <Container className="" fluid="lg">
        <Row>
          <Col xs={12} sm={6} className="p-2">
            <Branch
              title="المقر الرئيسي"
              address="الهرم – 7 ش الحاج موسى متفرع من ش يحيى شاهين من ش الهرم الرئيسى- أمام مطعم تكا التعاون
"
            />
          </Col>{" "}
          <Col xs={12} sm={6} className="p-2">
            <Branch
              title="مكتب المنصورة"
              address=" 111 شارع الجمهورية - بجوار بنك الإمارات دبي الوطني"
            />
          </Col>
          <Col xs={12} sm={6} className="p-2">
            <Branch
              title="دار أيتام التعاون"
              address="الهرم – 7 ش الحاج موسى متفرع من ش يحيى شاهين من ش الهرم الرئيسى- أمام مطعم تكا التعاون
"
            />
          </Col>
          <Col xs={12} sm={6} className="p-2">
            <Branch
              title="المقر الرئيسي"
              address="الهرم – 7 ش الحاج موسى متفرع من ش يحيى شاهين من ش الهرم الرئيسى- أمام مطعم تكا التعاون
"
            />
          </Col>{" "}
          <Col xs={12} sm={6} className="p-2">
            <Branch
              title="مكتب المنصورة"
              address=" 111 شارع الجمهورية - بجوار بنك الإمارات دبي الوطني"
            />
          </Col>
          <Col xs={12} sm={6} className="p-2">
            <Branch
              title="دار أيتام التعاون"
              address="الهرم – 7 ش الحاج موسى متفرع من ش يحيى شاهين من ش الهرم الرئيسى- أمام مطعم تكا التعاون
"
            />
          </Col>{" "}
        </Row>
      </Container>
    </>
  );
};

export default Branches;
