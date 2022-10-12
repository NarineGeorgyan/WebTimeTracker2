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
        borderWidth: 2,
        borderRadius: 15,
        spacing: 15,
      },
    ],
  });

  return (
    <Container className="chart d-flex flex-column gap-5 max-w-xs mx-auto">
      <Row>
        <Col>
          <BarChart charData={useSiteData} options={useSiteData} />
          <div className="title d-flex flex-column justify-content-center align-items-center bg-primary fs-2 fw-bold gap-2">
            google.com
            <span className="fs-5 text-xs text-light">65%</span>
            <span className="fs-5 text-xs text-light">time</span>
            <span className="fs-5 text-xs text-light">visit</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Today;
