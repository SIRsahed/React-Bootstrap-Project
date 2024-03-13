import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./feature4.css"
import item1 from "../../assets/item1.png"
import back4 from "../../assets/f4-back.png"

const Feature4 = () => {
  return (
    <section id="feature4">
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="f4_text">
                        <h5>Our Feature</h5>
                        <h2>All payments are linked to your Financy account</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
                <Col lg={{span: 6, offset: 1}}>
                    <div className="f4_img">
                        <img className='f4_back' src={back4} alt="" />
                        <div className="item1">
                            <div className="item-img"><img src={item1} alt="" /></div>
                            <div className="item-text">
                                <h4>+ $28,900</h4>
                                <h5>Received from Michael V</h5>
                            </div>
                        </div>
                        <div className="item1">
                            <div className="item-img"><img src={item1} alt="" /></div>
                            <div className="item-text">
                                <h4>+ $28,900</h4>
                                <h5>Received from Michael V</h5>
                            </div>
                        </div>
                        <div className="item1">
                            <div className="item-img"><img src={item1} alt="" /></div>
                            <div className="item-text">
                                <h4>+ $28,900</h4>
                                <h5>Received from Michael V</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature4