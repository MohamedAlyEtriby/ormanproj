import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiMobile3, CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import "./Mandob.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const Mandob = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    // Handle date change
    setSelectedDate(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <Container fluid="lg" className="px-3 mandob boxshadowout">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          بيانات المتبرع
        </p>
        <Form
          style={{ border: "1px solid #D9D9D9", borderRadius: "0.7rem" }}
          className="p-5 boxshadow"
        >
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="formFacebook">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiUser size={25} className="mx-2" /> اسـم المتبــــرع :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={30} className="mx-2" /> اسم العائلة :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formTwitter">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <MdOutlineMail size={30} className="mx-2" /> البريد الإلكتروني :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstagram">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={30} className="mx-2" /> رقــــــم المحمول :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> المحافظـــــــــــــة :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> العنــــــــــــــــــوان
              :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control as="textarea" rows={4} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <img
                src="../../../assets/kematbr3.png"
                width={25}
                alt=""
                className="mx-2"
              />{" "}
              قيمة التبـــــــــــرع :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> هـــدف التبـــــــــــرع
              :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Select>
                <option>الاشتراك</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formDate">
            <Form.Label column sm="5" xs={12} md={3} className="label">
              <CiMobile3 size={25} className="mx-2" /> هـــدف التبـــــــــــرع
              :
            </Form.Label>
            <Col sm="7" xs={12} md={9}>
              <Form.Control
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
          >
            إرســـــال
            <FaHeart className="mx-1" />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Mandob;
