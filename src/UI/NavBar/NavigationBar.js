import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#0a1647",
          minHeight: "60vh",
          width: "16rem",
        }}
      >
        <Container className="d-flex flex-column align-items-start">
          <div className="navbar-title h3 text-white pb-2 gap-1 d-flex flex-column ">
            <span> Web Activity</span>
            <span>Timer Tracker</span>
          </div>
          <Nav className="d-flex flex-column p-3 mb-5">
            {props.data &&
              props.data.map((item, i) => (
                <NavLink
                  className="d-flex justify-content-start text-white text-decoration-none p-2 gap-2"
                  activeclassname="actvive"
                  to={item.path}
                  key={i}
                >
                  <div className="fs-xs-4 fs-5">{item.icon}</div>
                  <div className="fs-5">{item.name}</div>
                </NavLink>
              ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
