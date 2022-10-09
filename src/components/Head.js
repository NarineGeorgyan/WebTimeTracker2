import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainHeader from "../UI/MainHeader";
import TabsItem from "../UI/NavBar/TabsItem";

const Head = () => {
  return (
    <Container>
      <Row className=" d-flex flex-column ">
        <Col
          className="h2  d-flex  flex-row gap-1 justify-content-center mb-3"
          style={{ color: "#858e96" }}
        >
          <MainHeader />
        </Col>
        <Col>
          <TabsItem />
        </Col>
      </Row>
    </Container>
  );
};

export default Head;
