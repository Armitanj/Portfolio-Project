import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./Skills.css";
// import CircularProgressSection from "../ProgressBar/ProgressBar";

export default function Skills() {
  return (
    <div>
      <Container className="skillsComp">
        <h1 className="mySkills text-center pt-5">
          MY <span>SKILLS</span>
        </h1>

        <CircularProgressSection />
        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </div>
  );
}
