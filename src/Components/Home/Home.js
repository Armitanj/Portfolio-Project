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
              I am interested in the Front-end field and looking for ways to
              learn more and improve in my relevant position. I am currently
              developing some responsive and user-friendly projects using
              ReactJS and have completed courses such as HTML5, CSS3, Bootstrap
              5.3, CSS grid, Flexbox, JavaScript ES6, NPM, ReactJS ,
              React-Bootstrap in a self-taught manner.
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
