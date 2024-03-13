import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./feature2.css"
import f2corner from "../../assets/f2-corner.png"

const Feature2 = () => {
  return (
    <section id="feature2">
        <Container className='f2_main'>
            <Row>
                <Col lg={7}>
                    <img className='f2_corner' src={f2corner} alt="" />
                    <div className="f2_text">
                        <h5>Our Feature</h5>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    </div>
                </Col>
                <Col lg={{span: 4, offset: 1}}>
                    <div className="f2_form">
                        <form action="">
                            <label htmlFor="">Get Started for Free</label><br />
                            <input type="text" placeholder='Email address'/><br />
                            <input type="text" placeholder='Password'/><br />
                            <button type='submit'>Get Started</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature2