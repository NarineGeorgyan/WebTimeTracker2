import React, { useState } from "react";

import BarChart from "../Chart/BarChart";
import { inputData } from "../../data";
import { Container, Row, Col } from "react-bootstrap";

const Today = () => {
  const [useSiteData] = useState({
    labels: inputData.map((data) => data.site),
    datasets: [
      {
        label: "Using Sites",
        data: inputData.map((data) => data.id),

        backgroundColor: [
          "rgba(241, 135, 251, 0.9)",
          "rgba(67, 156, 251, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(153, 102, 255, 0.9)",
          "rgba(255, 159, 64, 0.9)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        borderRadius: 15,
        spacing: 10,
      },
    ],
  });

  return (
    <Container className="flex justify-content gap-3 mx-auto">
      <Row>
        <Col className="position-relative" style={{ width: "30rem" }}>
          <BarChart charData={useSiteData} options={useSiteData} />
        </Col>
        <Col className="">
          <h3
            className="bg-white fw-bold text-center"
            style={{
              height: "10rem",
              width: "10rem",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              right: "33%",
            }}
          >
            google.com
            <span className="d-block">65%</span>
            <span className="d-block">time</span>
            <span className="d-block">visit</span>
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Today;
