import React from "react";
import Menu from "../Menu/Menu";
import { FaArrowRightLong } from "react-icons/fa6";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";

const infoBox = [
  { title: "4+", des: "Years of learninig." },
  { title: "10+", des: "Completed Projects." },
  { title: "6+", des: "Useful skills." },
  { title: "2+", des: "Framworks." },
];

export default function About() {
  return (
    <>
      <Container>
        <Row className="d-flex AboutComponent ">
          <h1 className="aboutTitle text-center">
            ABOUT <span>ME</span>
          </h1>

          <Col xl={5} lg={8} md={8} sm={12} className="leftAboutSec mt-5">
            <h2>PERSONAL INFOS</h2>
            <div className="infosSec">
              <div className="firstSec">
                <p>
                  First Name: <b>Armita</b>
                </p>
                <p>
                  Age: <b>22 Years</b>
                </p>
                <p>
                  Fleelance: <b>Available</b>
                </p>
                <p>
                  Phone: <b>+989104594547</b>
                </p>
                <p>
                  Skype: <b>Armita.nj</b>
                </p>
              </div>
              <div className="secondSec">
                <p>
                  Last Name: <b>Najafabadi</b>
                </p>
                <p>
                  Nationality: <b>Iranian</b>
                </p>
                <p>
                  Address: <b>Iran</b>
                </p>
                <p>
                  Email: <b>Armitanj.dev@gmail.com</b>
                </p>
                <p>
                  Languages: <b>Persian,English</b>
                </p>
              </div>
            </div>
            <button className="moreAboutMe w">
              View More
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </Col>
          <Col xl={5} lg={8} md={8} sm={12} className="rightAboutSec mt-5">
            {infoBox.map((info) => (
              <div key={info.id}>
                <div className="infoBox">
                  <h4 className="infoBoxTitle">{info.title}</h4>
                  <p className="infoBoxDesc">{info.des}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </>
  );
}
