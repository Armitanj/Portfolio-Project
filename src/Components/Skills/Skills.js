import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { id: 1, pic: './images/skillPics/HTML.png', name: 'HTML', desc: 'Structures web content (headings, paragraphs, links)' },
    { id: 2, pic: './images/skillPics/CSS.png', name: 'CSS', desc: 'Styles web content (colors, fonts, layout).' },
    { id: 3, pic: './images/skillPics/Js2.png', name: 'JavaScript', desc: 'Adds interactivity and dynamic behavior.' },
    { id: 4, pic: './images/skillPics/React.png', name: 'React', desc: 'A library for building user interfaces with reusable components.' },
    { id: 5, pic: './images/skillPics/PWA.png', name: 'PWA', desc: 'A web app that works offline and can be installed on a device.' },
  ]
  return (
    <div>
      <Container className="skillsComp">
        <h1 className="mySkills text-center pt-5">
          MY <span>SKILLS</span>
        </h1>

        <Row className=" d-flex flex-row  align-items-center justify-content-start  ">
         
          {skills.map(skill => (
          <Col xl={4} lg={4} md={6} sm={6} className="text-center align-center skillRow" key={skill.id}>
            <div className="mt-5 mb-1 skills">
              <img src={skill.pic} className="skillImg" alt="Img"/>
              <h3 className="mt-2" >{skill.name}</h3>
              <p>{skill.desc}</p>
            </div>
           </Col>
          ))}
        </Row>

        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </div>
  );
}
