import React from "react";
import { Card } from "react-bootstrap";

const CardItem = ({img,title,desc}) => {
  return (
    <Card className=""style={{height:"29.3rem",borderRadius:"30px"}}>
      <Card.Img
        src={img}
        style={{ textAlign: "center" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{color:"#8E8E8E"}}>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
