import React from "react";
import { Card, Col } from "react-bootstrap";
import './PersonCard.css'
const PersonCard = () => {
  return (
    <Col xs={12} sm={6} md={4} style={{justifyContent:"center",display:"flex"}} className="p-4">
      <Card style={{ width: "100%",display:"flow-root" }} className="py-5">
        <Card.Img  src="../../../assets/Person.png"  style={{textAlign:"center"}} className="person-img" />
        <Card.Body>
          <Card.Title>م/ محمد عادل محمد عبد المنعم زغلول</Card.Title>
          <Card.Text>
          أمين الصندوق المهندس
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonCard;
