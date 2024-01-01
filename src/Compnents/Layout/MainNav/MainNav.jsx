import React, { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./MainNav.css";
import { Link } from "react-router-dom";
const MainNav = () => {
  const [backnav, setbacknav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the window has scrolled by at least 187 pixels
      if (window.scrollY >= 120) {
        // Your logic here
        setbacknav(true);
      } else {
        setbacknav(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const activities = [
    { id: 1, title: "القضاء على الجوع والفقر", path: "/activities/1" },
    {
      id: 2,
      title: "لمدن والمجتمعات المستدامة وتوفير المياه النظيفة",
      path: "/activities/2",
    },
    { id: 3, title: "الصحة الجيدة والرفاه", path: "/activities/3" },
    { id: 4, title: "العمل اللائق والنمو الاقتصادي", path: "/activities/4" },
    { id: 5, title: "ساهم في الخير", path: "/activities/5" },
  ];
  return (
    <Navbar expand="lg" className={`${backnav ? "back" : "" } noback mobnav`}>
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
          <Nav className={`me-auto navlinks ${backnav?"barnav":""}`}>
            <Nav.Link className="" href="">
              <Link to="/">الصفحة الرئيسية</Link>
            </Nav.Link>
            <NavDropdown
              title="انشطة الاورمان"
              id="basic-nav-dropdown"
              style={{ zIndex: "848383" }}
            >
              {activities.map((activity) => {
                return (
                  <NavDropdown.Item key={activity.id} className="">
                    <Link to={activity.path}>{activity.title}</Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link className="">
              <Link to="/About">عن الاورمان</Link>
            </Nav.Link>
            <Nav.Link>
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
