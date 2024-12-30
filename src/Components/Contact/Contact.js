import React from "react";
import Menu from "../Menu/Menu";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaMap } from "react-icons/fa";
import { IoMailOpen, IoCall } from "react-icons/io5";
export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: <FaMap />,
      title: "ADDRESS POINT",
      desc: "123 Stree New York city, United State of America 7500065",
    },
    {
      id: 2,
      icon: <IoMailOpen />,
      title: "MAIL ME",
      desc: "armitanj.dev@gmail.com",
    },
    {
      id: 3,
      icon: <IoCall />,
      title: "CALL ME",
      desc: "+989024151648",
    },
  ];
  return (
    <>
      <Container>
        <Row className="contactComponent">
          <h1 className="contactTitle text-center">
            GET IN <span>TOUCH</span>
          </h1>
          <Col>
            <h4>DON'T BE SHY!</h4>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              nerw projects, creative ideas or opportinities to be part of your
              visions.
            </p>
            {contactInfo.map((info) => (
              <div className="d-flex">
                <span>{info.icon}</span>
                <div>
                  <span>{info.title}</span>
                  <p>{info.desc}</p>
                </div>
              </div>
            ))}
          </Col>
          <Col></Col>
        </Row>
        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </>
  );
}
