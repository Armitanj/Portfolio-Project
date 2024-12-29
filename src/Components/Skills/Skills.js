import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Menu from '../Menu/Menu';
import './Skills.css'

export default function Skills() {

    const skillsInfo = [
        { id: 1, title: 'HTML', value: 100 },
        { id: 2, title: 'CSS', value: 100 },
        { id: 3, title: 'Bootstrap', value: 99 },
        { id: 4, title: 'JavaScript', value: 80 },
        { id: 5, title: 'Reactjs', value: 85 },
        { id: 6, title: 'TypeScript', value: 10 },
        { id: 7, title: 'PWA', value: 40 },
        { id: 8, title: 'Responsive Design', value: 100 },
    ]
    return (
        <>

            <Container fluid className='skillsComp'>
                <h1 className='mySkills text-center pt-4'>My <span>Skills</span></h1>

                <Row className=" d-flex mt-100 justify-content-center me-3">
                    {skillsInfo.map(skill => (
                        <Col lg={3} md={4} className='allProgress mt-2 d-flex justify-content-center  me-2'>
                            <div className='d-flex flex-column align-items-center justify-content-evenly'>
                                <div className="progress yellow ">
                                    <span className="progress-left">
                                        <span className="progress-bar" 
                                        // style={{transform: `rotate(${skill.value * 3.6}deg)`}}
                                        ></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar" style={{transform: `rotate(${skill.value}deg)`}}></span>
                                    </span>
                                    <div className="progress-value">{skill.value}%</div>
                                </div>
                                <span className='progress-title'>{skill.title}</span>
                            </div>

                        </Col>
                    ))}
                </Row>

                <div className='menuTagSec'>
                    <Menu />
                </div>
            </Container>
        </>

    )

}
