import React from 'react'
import Menu from '../Menu/Menu'
import { FaArrowRightLong } from "react-icons/fa6";
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';


const infoBox = [
  { title: '13+', des: 'Lorem ipsum dolor sit.' },
  { title: '2+', des: 'Active Projects.' },
  { title: '9+', des: 'Mini Projects.' },
  { title: '5+', des: 'Framworks.' }
]


export default function About() {
  return (
    <>
    <Container fluid>

      <Row className='d-flex AboutComponent '>
      <h1 className='aboutTitle text-center'>About <span>Me</span></h1>

        <Col xl={5} lg={8} md={8} sm={12} className="leftAboutSec mt-5">
          <h2>PERSONAL INFOS</h2>
          <div className='infosSec'>
            <div className='firstSec'>
              <p>First Name: <b>Armita</b></p>
              <p>Age: <b>22 Years</b></p>
              <p>Fleelance: <b>Available</b></p>
              <p>Phone: <b>+989024151648</b></p>
              <p>Skype: <b>Armita.nj</b></p>
            </div>
            <div className='secondSec'>
              <p>Last Name: <b>Najafabadi</b></p>
              <p>Nationality: <b>Iranian</b></p>
              <p>Address: <b>Iran</b></p>
              <p>Email: <b>Armitanj.dev@gmail.com</b></p>
              <p>Languages: <b>Persian,English</b></p>
            </div>

          </div>
          <button className='moreAboutMe w'>View More<span><FaArrowRightLong /></span></button>
        </Col>
        <Col xl={5} lg={8} md={8} sm={12} className="rightAboutSec">
          {infoBox.map(info => (
            <div>
              <div className="infoBox">
                <h4 className='infoBoxTitle'>{info.title}</h4>
                <p className='infoBoxDesc'>{info.des}</p>
              </div>
            </div>
          ))}

        </Col>


      </Row>



      <div className='menuTagSec'>
        <Menu />
      </div>

</Container>

    </>
  )
}
