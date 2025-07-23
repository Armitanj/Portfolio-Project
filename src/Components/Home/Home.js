import React from "react";
import { FaDownload } from "react-icons/fa";
import Menu from "../Menu/Menu";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Container>
        <Row className="d-flex text-align-center homeComponent">
          <Col xl={5} lg={5} md={5} sm={12} className="text-center">
            <div className="homePic">
              <img
                src="./images/Armita.png"
                alt="my-pic"
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col xl={6} lg={5} md={7} sm={12} className="homeRightSec text-start">
            <h1 className="myName">- I'M ARMITA NAJAFABADI.</h1>
            <h1 className="jobTitle"> &nbsp; FRONT END DEVELOPER</h1>
            <p className="desc">
              Motivated Front-end developer with experience in building responsive and user-friendly web applications. Skilled in React, Tailwind CSS, and modern JavaScript frameworks. Eager to grow professionally and contribute to dynamic and collaborative teams. Passionate about creating seamless user experiences and writing clean, maintainable code.


            </p>
            <a href="/cv/Armita_Najafabadi_Resume.pdf" download>
              {" "}
              <button className="moreAboutMe downloadBtn">
                Download CV
                <span>
                  <FaDownload />
                </span>
              </button>
            </a>
          </Col>
        </Row>
        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </>
  );
}
