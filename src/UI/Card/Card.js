import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <Container className={styles.card}>
        <Row>
          <Col md="4" xs="2" className="flex ">
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card;
