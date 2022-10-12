import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MainHeader from "../MainHeader";

const NavigationBar = (props) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        style={{ backgroundColor: "#471069", minHeight: "60vh" }}
        data-testid="useSite"
      >
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Container className="d-flex flex-column align-items-start">
            <Row>
              <Col className="navbar-title h5 text-white pb-5 gap-2 d-flex flex-column">
                <MainHeader />
              </Col>
            </Row>

            <Nav className="d-flex flex-column p-3 mb-5">
              {props.data &&
                props.data.map((item, i) => (
                  <NavLink
                    className="d-flex justify-content-start text-white text-decoration-none p-2 gap-2"
                    activeclassname="active"
                    to={item.path}
                    key={i}
                  >
                    <div className="fs-xs-4 fs-5">{item.icon}</div>
                    <div className="fs-5">{item.name}</div>
                  </NavLink>
                ))}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
