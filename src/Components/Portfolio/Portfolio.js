import React from "react";
import Menu from "../Menu/Menu";
import "./Portfolio.css";
import { Col, Container, Row } from "react-bootstrap";
export default function Portfolio() {
  const portfolioImages = [
    {id: 1, image:'./images/sample1.png', link:'Fully-Responsive-Webpage'},
    {id: 2, image:'./images/sample2.png', link:'Gradient-generator'},
    {id: 3, image:'./images/sample3.png', link:'Single-web-page-1'},
    {id: 4, image:'./images/sample4.png', link:'Single-web-page-2'},
    {id: 5, image:'./images/sample5.png', link:'Single-Web-Page-3'},
    {id: 6, image:'./images/sample6.png', link:'WebPage-with-CSS-grid'},
  ]
  return (
    <>
      <Container >
        <Row className="porfolioComponent text-center flex-column">
          <h1 className="myPortfolio text-center pt-5">
            MY <span>PORTFOLIO</span>
          </h1>
          {/* <Col className="mt-4">
            <ul className="portMenu d-flex flex-row justify-content-center">
              <li><span>All</span></li>
              <li><span>Video</span></li>
              <li><span>Personal</span></li>
              <li><span>SPA</span></li>
              <li><span>React</span></li>
            </ul>
          </Col> */}
          <Col className="portImg textCenter">
            {portfolioImages.map(img => (
              <a href={`https://github.com/Armitanj/${img.link}`} key={img.id}>
                <img key={img.id} src={img.image} alt="pic" className="portfolioImages"/>

              </a>
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
