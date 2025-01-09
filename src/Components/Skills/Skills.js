import React from "react";
import { Container, Row } from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./Skills.css";
import CircularProgressSection from "../ProgressBar/ProgressBar";

export default function Skills() {
  const skills = [
    { id: 1, name: 'HTML', desc: 'Hyer text markup language' },
    { id: 2, name: 'CSS', desc: 'Cascade Style Sheets' },
    { id: 3, name: 'JavaScript', desc: 'Lorem ipsum Lorem ipsume' },
    { id: 4, name: 'Reactjs', desc: 'Lorem ipsum Lorem ipsume' },
    { id: 5, name: 'PWA', desc: 'Progressive Web Application' },
  ]
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
    </div >
  );
}
