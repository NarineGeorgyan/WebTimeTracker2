import React from "react";

import { FaHome, FaClock } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";

import Card from "../UI/Card/Card";
import NavigationBar from "../UI/NavBar/NavigationBar";

const SideBar = (props) => {
  const menuItem = [
    {
      id: new Date() % 1000,
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      id: new Date() % 1000,
      path: "/setting",
      name: "Setting",
      icon: <AiFillSetting />,
    },
    {
      id: new Date() % 1000,
      path: "/limit",
      name: "Limit",
      icon: <FaClock />,
    },
  ];

  return (
    <>
      <Card>
        <Container>
          <Row>
            <Col className="d-flex flex-row p-0 ">
              <NavigationBar data={menuItem} />
              <main 
                style={{
                  width: "100%",
                  minWidth: "10rem",
                  padding: "1.5rem",
                  backgroundColor: "#9bb2e5",
                }}
              >
                {props.children}
              </main>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default SideBar;
