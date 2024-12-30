import React from "react";
import Menu from "../Menu/Menu";
import "./Portfolio.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Portfolio() {
  const portfolioImages = [
    {id: 1, image:'./images/Armita.jpg'},
    {id: 2, image:'./images/Armita.jpg'},
    {id: 3, image:'./images/Armita.jpg'},
    {id: 4, image:'./images/Armita.jpg'},
    {id: 5, image:'./images/Armita.jpg'},
    {id: 6, image:'./images/Armita.jpg'},
  ]
  return (
    <>
      <Container >
        <Row className="porfolioComponent text-center flex-column">
          <h1 className="myPortfolio text-center pt-5">
            MY <span>PORTFOLIO</span>
          </h1>
          <Col className="mt-4">
            <ul className="portMenu d-flex flex-row justify-content-center">
              <li><span>All</span></li>
              <li><span>Video</span></li>
              <li><span>Personal</span></li>
              <li><span>SPA</span></li>
              <li><span>React</span></li>
            </ul>
          </Col>
          <Col className="portImg d-flex flex-row flex-wrap justify-content-evenly mb-4">
            {portfolioImages.map(img => (
              <img key={img.id} src={img.image} alt="pic" className="portfolioImages"/>
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
