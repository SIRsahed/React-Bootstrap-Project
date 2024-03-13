import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./feature3.css"
import mentor1 from "../../assets/mentor1.png"
import mentor2 from "../../assets/mentor2.png"
import mentor3 from "../../assets/mentor3.png"
import pic2 from "../../assets/pic2.png"
import verified from "../../assets/verified.png"
import nearverified from "../../assets/nearverified.png"

const Feature3 = () => {
  return (
    <section id="feature3">
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="f3_text">
                        <h5>Our Feature</h5>
                        <h2>All payments are linked to your Financy account</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
                <Col lg={4}>
                    <ul className='mentor_list'>
                        <h4 className='mentor_head'>100+ Verified Teacher</h4>
                        <img className='verified' src={verified} alt="" />
                        <li>
                            <div className="pic">
                                <div className="img">
                                    <img src={mentor1} alt="" />
                                </div>
                                <div className="data">
                                    <h5>Ben Stokes</h5>
                                    <h6>Mentor of Web</h6>
                                    </div>
                                </div>
                        </li>
                        <li>
                            <div className="pic">
                                <div className="img">
                                    <img src={mentor2} alt="" />
                                </div>
                                <div className="data">
                                    <h5>Hardik Pandya</h5>
                                    <h6>Mentor of UI/UX</h6>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pic">
                                 <div className="img">
                                    <img src={mentor3} alt="" />
                                </div>
                                <div className="data">
                                    <h5>Joe Root</h5>
                                    <h6>Mentor of Web Design</h6>
                                    </div>
                            </div>
                        </li>
                        <li><a href="#">See More -</a></li>
                    </ul>
                </Col>
                <Col lg={5}>
                    <div className="pic2">
                        <img src={pic2} alt="" />
                        <h4>Morne Morkel</h4>
                        <h5>Mentor of Web Development</h5>
                        <a href="#">CONTACT</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature3