import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./MainNav.css";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" style={{ margin: "0" }}>
          <img
            src="../../../assets/orman.png"
            style={{ width: "10rem" }}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="" href="">
              <Link to="/">الصفحة الرئيسية</Link>
            </Nav.Link>
            <NavDropdown
              title="انشطة الاورمان"
              id="basic-nav-dropdown"
              style={{ zIndex: "933837373733" }}
            >
              <NavDropdown.Item href="#action/3.1">
                القضاء على الجوع والفقر
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                لمدن والمجتمعات المستدامة وتوفير المياه النظيفة والصرف الص{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                الصحة الجيدة والرفاه
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                العمل اللائق والنمو الاقتصادي{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                ساهم في الخير{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="" >
              <Link to="/About">عن الاورمان</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/About">اخبارنا</Link>
            </Nav.Link>
          </Nav>
          <Nav className="me-auto ff">
            <div className="flex">
              <div className="navBor">حقق الحلم</div>
              <div className="navBor">اتبرع الان</div>
            </div>
            <div className="navBor">احسب زكاتك</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
