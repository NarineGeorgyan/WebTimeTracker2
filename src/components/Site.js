import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";
import ButtonItem from "../UI/Button/ButtonItem";

const Site = () => {
  const formSideHandler = () => {};
  return (
    <Form className="p-4 p-sm-3 mb-4 " onSubmit={formSideHandler}>
      <Container className="d-flex gap-3 mt-3 flex-column flex-xs-wrap md-3">
        <Form.Group>
          <Form.Label>Site address</Form.Label>
          <Col className="d-flex gap-2 flex-xs-wrap">
            <Form.Control
              className="gap-2 p-1"
              type="text"
              name="siteName"
              placeholder="Enter site name"
              required
            />
            <ButtonItem type="submit">+</ButtonItem>
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Stop tracking if no activity detected for</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ minHeight: "30px" }}
          >
            {[...Array(60).keys()].map((item, i) => (
              <option key={i}>{item} Seconds </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Container>
    </Form>
  );
};

export default Site;
