import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { FaLock, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import './Register.css'
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          إنشــــــاء حســــــــاب
        </p>
        <Form>
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="formFacebook">
            <Form.Label column sm="3" xs={6} className="label">
              <CiUser size={25} className="mx-2" /> اســـــــــم المتستخدم :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="3" xs={6} className="label">
              <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="3" xs={6} className="label">
              <CiMobile3 size={30} className="mx-2" /> رقــــــم المحمول :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={6} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={6} className="label">
              <FaLock size={25} className="mx-2" /> تأكيد كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={6}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
        </Form>
        <Button
          className="w-75 p-3 mb-2"
          style={{ background: "#0C6A2C", border: "none" }}
        >
          حفظ
        </Button>
        <Button
          className="w-75"
          style={{ background: "transparent", border: "none",color:"black" }}
        >
            <Link to="/Login">هل لديك حساب</Link>
        </Button>
      </Container>
    </>
  );
};

export default Register;
