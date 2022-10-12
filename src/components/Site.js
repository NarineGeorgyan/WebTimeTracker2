import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";
import ButtonItem from "../UI/Button/ButtonItem";
import { useNavigate } from "react-router";

const getSecondsValue = (str) => {
  str = str.replace("seconds", "");
  return +str;
};
const Site = () => {
  const [inputSite, setInputSite] = useState("");
  const [seconds, setSeconds] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputSite(e.target.value);
  };
  const formSiteAndDeadlineHandler = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "trackSite",
      JSON.stringify({
        id: new Date() / 1000,
        trackSite: inputSite,
        timeLimit: getSecondsValue(seconds),
      })
    );
    navigate("/limit");
  };

  return (
    <Form className="p-4 p-sm-3 mb-4 " onSubmit={formSiteAndDeadlineHandler}>
      <Container className="d-flex gap-3 mt-3 flex-column flex-xs-wrap md-3">
        <Form.Group>
          <Form.Label>Site address</Form.Label>
          <Col className="d-flex gap-2 flex-xs-wrap">
            <Form.Control
              className="gap-2 p-1"
              type="text"
              name="site"
              placeholder="Enter site name"
              required
              value={inputSite}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Stop tracking if no activity detected for</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="selectSeconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
          >
            {[...Array(61).keys()].map((item, i) => (
              <option key={item} value={`item ${item}`}>
                {item} seconds
              </option>
            ))}
          </Form.Select>
          <ButtonItem className="text-center p-3 mt-2" type="submit">
            Create
          </ButtonItem>
        </Form.Group>
      </Container>
    </Form>
  );
};

export default Site;
