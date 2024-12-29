import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./ProgressBar.css";
const Progressbar = ({ progress, title }) => {
  const radius = 50; // شعاع دایره
  const strokeWidth = 8; // ضخامت دایره
  const normalizedRadius = radius - strokeWidth / 2; // شعاع نرمال‌شده
  const circumference = 2 * Math.PI * normalizedRadius; // محیط دایره
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="circular-progress-container">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circular-progress-svg"
      >
        {/* دایره پس‌زمینه */}
        <circle
          className="background-circle"
          stroke="yellow"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset="0"
        />
        {/* دایره پیشرفت */}
        <circle
          className="progress-circle"
          stroke="#FDDB3A"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="circular-progress-text">
        <div className="progress-percentage">{progress}%</div>
      </div>
      <div className="progress-title">{title}</div>
    </div>
  );
};

const CircularProgressSection = () => {
  const skills = [
    { id: 1, title: "HTML", progress: 100 },
    { id: 2, title: "CSS", progress: 100 },
    { id: 3, title: "Bootstrap", progress: 99 },
    { id: 4, title: "JavaScript", progress: 80 },
    { id: 5, title: "Reactjs", progress: 85 },
    { id: 6, title: "TypeScript", progress: 10 },
    { id: 7, title: "PWA", progress: 40 },
    { id: 8, title: "Responsive Design", progress: 100 },
  ];

  return (
    <Container>
      <Row className="rowSec">
        {skills.map((skill) => (
          <Col
            key={skill.id}
            xs={6}
            sm={4}
            md={3}
            className="d-flex justify-content-center mb-4"
          >
            <Progressbar title={skill.title} progress={skill.progress} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CircularProgressSection;
