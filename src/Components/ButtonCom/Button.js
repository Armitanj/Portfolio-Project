import React from 'react'

import './Button.css'
import { Col, Container, Row } from 'react-bootstrap'
export default function buttonCom() {

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className='bg-primary text-white'>Column1</Col>
          <Col md={6} className='bg-success text-white'>Column2</Col>
        </Row>

      </Container>
    </>
  )
}
