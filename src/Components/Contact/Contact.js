import React from "react";
import Menu from "../Menu/Menu";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaMap } from "react-icons/fa";
import { IoMailOpen, IoCall } from "react-icons/io5";
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiSendPlaneFill } from "react-icons/ri";

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

  const socialIcons = [
    { id: 1, icon: <FaTelegramPlane /> },
    { id: 2, icon: <FaLinkedinIn /> },
    { id: 3, icon: <SiGmail /> },
    { id: 4, icon: <FaGithub /> },
  ];
  return (
    <>
      <Container>
        <Row className="contactComponent">
          <h1 className="contactTitle text-center mt-5">
            GET IN <span>TOUCH</span>
          </h1>
          <Col xl={4} lg={6} md={12}>
            <div className="contactFirstCol">
              <h4>DON'T BE SHY!</h4>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportinities to be
                part of your visions.
              </p>
              {contactInfo.map((info) => (
                <div className="d-flex" key={info.id}>
                  <h3 className="infoIcon">{info.icon}</h3>
                  <div className="ms-3 mt-2">
                    <span className="infoTitle">{info.title}</span>
                    <p>{info.desc}</p>
                  </div>
                </div>
              ))}
              <div className="d-flex flex-row mt-2">
                {socialIcons.map((icon) => (
                  <div className="socialIcons" key={icon.id}>
                    <span className="socialIcon rounded-circle m-2">
                      {icon.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={8} lg={6} md={12} className="contactSecondCol mt-4">
            <Row className="d-flex justify-content-between  ">
              <Col xl={5} md={12} sm={12} >
                <div class="form-group">
                  <input type="text" id="name" placeholder="YOUR NAME" />
                  <label for="name">YOUR NAME</label>
                </div>
              </Col>
              <Col xl={5} md={12} sm={12}>
                <div class="form-group emailInput">
                  <input type="email" id="email" placeholder="YOUR EMAIL" />
                  <label for="email">YOUR EMAIL</label>
                </div>
              </Col>
            </Row>
            <div className="subjectInput mt-4">
              <div class="form-group">
                <input type="text" id="subject" placeholder="YOUR SUBJECT" />
                <label for="subject">YOUR SUBJECT</label>
              </div>
            </div>
            <div className="messageInput mt-4">
              <div class="form-group ">
                <textarea type="text" id="area" placeholder="" />
                <label for="area">YOUR MESSAGE</label>
              </div>
            </div>
            <button className="moreAboutMe sendBtn">
              Send Message
              <span>
                <RiSendPlaneFill />
              </span>
            </button>
          </Col>
        </Row>
        <div className="menuTagSec">
          <Menu />
        </div>
      </Container>
    </>
  );
}
