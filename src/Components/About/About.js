import React from "react";
import Menu from "../Menu/Menu";
import { FaArrowRightLong } from "react-icons/fa6";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const infoBox = [
  { id: 1, title: "4+", des: "Years of learninig." },
  { id: 2, title: "10+", des: "Completed Projects." },
  { id: 3, title: "6+", des: "Useful skills." },
  { id: 4, title: "2+", des: "Framworks." },
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
                  Phone: <b><Link to='tel:+989024151648' className="links">+989024151648</Link></b>
<<<<<<< HEAD

                  {/* Phone: <b><Link to='tel:+989024151648' className="links">+989123456789</Link></b> */}

=======
<<<<<<< HEAD
                  {/* Phone: <b><Link to='tel:+989024151648' className="links">+989123456789</Link></b> */}
=======
>>>>>>> 9c0a52d111b3b595b506f9abaffc0ae571733eb7
>>>>>>> 2d3e25c152fd129bbf1e888d999cfaf25120ce8c
                </p>
                <p>
                  Skype: <b><Link to='https://join.skype.com/invite/zFsqjr3UhpH5' className="links">Armitanj</Link></b>
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
                  Address: <b>Iran, Tehran</b>
                </p>
                <p>
<<<<<<< HEAD
                  Email: <b><Link to='mailto:armitanj.dev@gmail.com' className="links">Example@gmail.com</Link></b>
                  {/* Email: <b><Link to='mailto:armitanj.dev@gmail.com' className="links">Armitanj.dev@gmail.com</Link></b> */}
                  Email: <b><Link to='mailto:armitanj.dev@gmail.com' className="links">Armitanj.dev@gmail.com</Link></b>
=======
<<<<<<< HEAD
                  Email: <b><Link to='mailto:armitanj.dev@gmail.com' className="links">Example@gmail.com</Link></b>
                  {/* Email: <b><Link to='mailto:armitanj.dev@gmail.com' className="links">Armitanj.dev@gmail.com</Link></b> */}
=======
                  Email: <b><Link to='mailto:armitanj.dev@gmail.com' className="links">Armitanj.dev@gmail.com</Link></b>
>>>>>>> 9c0a52d111b3b595b506f9abaffc0ae571733eb7
>>>>>>> 2d3e25c152fd129bbf1e888d999cfaf25120ce8c
                </p>
                <p>
                  Languages: <b>Persian, English</b>
                </p>
              </div>
            </div>
            <Link to=".././skills">
              <button className="moreAboutMe w">
                View More
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </Link>
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
