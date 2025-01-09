import React from "react";
import Menu from "../Menu/Menu";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaMap } from "react-icons/fa";
import { IoMailOpen, IoCall } from "react-icons/io5";
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: <FaMap />,
      title: "ADDRESS POINT",
      desc: "Iran, Tehran",
    },
    {
      id: 2,
      icon: <IoMailOpen />,
      title: "MAIL ME",
      desc: "armitanj.dev@gmail.com",
      // desc: "example@gmail.com",
      link: "mailto:armitanj.dev@gmail.com",
    },
    {
      id: 3,
      icon: <IoCall />,
      title: "CALL ME",
      link: "tel:+989024151648",
      // link: "tel:+989123456789",
      desc: "+989024151648",
    },
  ];

  const socialIcons = [
    { id: 1, icon: <FaTelegramPlane />, link: "t.me/armitanj" },
    {
      id: 2,
      icon: <SiGmail />,
      link: "mailto:armitanj.dev@gmail.com",
      
    },
    {
      id: 3,
     icon: <FaLinkedinIn />,
      link: "www.linkedin.com/in/armitanajafabadi",
    },
    { id: 4, icon: <FaGithub />, link: "github.com/armitanj" },
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
                <div className="d-flex align-items-center" key={info.id}>
                  <h3 className="infoIcon">{info.icon}</h3>
                  <div className="ms-3 mt-2">
                    <span className="infoTitle">{info.title}</span>
                    <p>
                      <Link to={info.link} className="links">{info.desc}</Link>
                    </p>
                  </div>
                </div>
              ))}
              <div className="d-flex flex-row mt-4">
                {socialIcons.map((icon) => (
                  <div className="socialIcons" key={icon.id}>
                    <a href={`http://${icon.link}`} className="eachIcon">
                      <span className="socialIcon rounded-circle m-2">
                        {icon.icon}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xl={8} lg={6} md={12} className="contactSecondCol mt-4">
            <Row className="d-flex justify-content-between  ">
              <Col xl={5} md={12} sm={12}>
                <div className="form-group">
                  <input type="text" id="name" placeholder="YOUR NAME" />
                  <label htmlFor="name">YOUR NAME</label>
                </div>
              </Col>
              <Col xl={5} md={12} sm={12}>
                <div className="form-group emailInput">
                  <input type="email" id="email" placeholder="YOUR EMAIL" />
                  <label htmlFor="email">YOUR EMAIL</label>
                </div>
              </Col>
            </Row>
            <div className="subjectInput mt-4">
              <div className="form-group">
                <input type="text" id="subject" placeholder="YOUR SUBJECT" />
                <label htmlFor="subject">YOUR SUBJECT</label>
              </div>
            </div>
            <div className="messageInput mt-4">
              <div className="form-group ">
                <textarea type="text" id="area" placeholder="" />
                <label htmlFor="area">YOUR MESSAGE</label>
              </div>
            </div>
            <a href="mailto:armitanj.dev@gmail.com">
              <button className="moreAboutMe sendBtn">
                Send Message
                <span>
                  <RiSendPlaneFill />
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
