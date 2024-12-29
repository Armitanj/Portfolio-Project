import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./Skills.css";
import CircularProgressSection from "../ProgressBar/ProgressBar";

export default function Skills() {
  return (
    <div className="h-100">
      <Container className="skillsComp">
        <h1 className="mySkills text-center pt-5">
          My <span>Skills</span>
        </h1>

        <CircularProgressSection />
        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </div>
  );
}
