import React from 'react'
import { FaDownload } from "react-icons/fa";
import Menu from '../Menu/Menu'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap';
export default function Home() {
    return (
        <>
            <Container>
                <Row className='d-flex text-align-center homeComponent'>
                    <Col lg={5} md={7} sm={12} className='text-center'>
                        <div className="homePic">
                            <img src="./images/Armita.jpg" alt="mypic" className='img-fluid rounded' />
                        </div>
                    </Col>
                    <Col lg={6} md={7}  sm={12} className='homeRightSec text-center'>
                        <h1 className='myName'>- I'M ARMITA NAJAFABADI.</h1>
                        <h1 className="jobTitle"> &nbsp; FRONT END DEVELOPER</h1>
                        <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit animi eos dolores. Voluptatem libero maiores repellendus, consequatur possimus rem, nobis blanditiis id at mollitia ad impedit. Explicabo, consequatur id?</p>
                        <a href="/cv/Armita_Najafabadi_Resume.pdf" download> <button className='moreAboutMe downloadBtn'>Download CV<span><FaDownload /></span></button></a>

                    </Col>


                </Row>
                <div className='menuTagSec'>
                    <Menu />
                </div>
            </Container>



        </>


    )
}
