import React from "react";
import "./PasswordForget.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
const PasswordForget = () => {
  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3 boxshadowout">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إدخال كلمة المرور الجديدة
        </p>
        <Form className="">
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="3" xs={12} className="label">
              <CiUser size={25} className="mx-2" />
              كلمــــــــة المرور الحالية :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور الجديدة
              :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" className="mb-1" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> تأكيد كلمة المرور  الجديدة :    
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" className="mb-1" />
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
          >
            حفظ
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default PasswordForget;
