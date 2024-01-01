import React, { useState } from "react";
import HeaderPhoto from "../HeaderPhoto/HeaderPhoto";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <HeaderPhoto imageUrl={"../../../assets/actfakr1.png"} />
      <Container fluid="lg" className="px-3">
        <p style={{ fontSize: "1.7rem", color: "#8E8E8E", textAlign: "right" }}>
          تسجيل الدخول إلى حسابك
        </p>
        <Form>
          {/* Social Media handles */}
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="3" xs={12} className="label">
              <CiUser size={25} className="mx-2" /> اســـــــــم المتستخدم :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formLinkedIn">
            <Form.Label column sm="3" xs={12} className="label">
              <FaLock size={25} className="mx-2" /> كلمــــــــة المرور :
            </Form.Label>
            <Col sm="9" xs={12}>
              <Form.Control type="password" className="mb-1" />
              <div className="flex w-50 checkbx">
                <Form.Check
                  type="checkbox"
                  id="custom-checkbox"
                  label="تذكرني"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{ width: "fit-content" }}
                  className="inputa"
                />
                <div>
                  <Link>هل نسيت كلمة السر؟</Link>
                </div>
              </div>
            </Col>
          </Form.Group>
          <Button
            className="w-75 p-3 mb-2"
            style={{ background: "#0C6A2C", border: "none" }}
          >
            حفظ
          </Button>
          <Button
            className="w-75"
            style={{
              background: "transparent",
              border: "none",
              color: "black",
            }}
          >
            <Link to="/Register">انشاء حساب جديد؟</Link>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
