import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./feature.css"
import secimg from "../../assets/feature.png"

const Feature = () => {
  return (
    <section id="feature">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="feature_img"><img className='w-100' src={secimg} alt="" /></div>
                </Col>
                <Col >
                    <div className="feature_text">
                        <h5>Our Feature</h5>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature