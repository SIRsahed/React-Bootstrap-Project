import React from 'react'
import "./testimonial.css"
import { Col, Container, Row } from 'react-bootstrap'
import test_img from "../../assets/test_img.png"
import test_bb from "../../assets/test_bb.png"
import stars from "../../assets/stars.png"
import small_img from "../../assets/small_img.png"

const Testimonial = () => {
  return (
    <section className="testimonial">
        <Container>
            <Row>
                <Col lg={4}>
                <div className="test_head">
                    <h4>Testimonials</h4>
                    <h2>Check what our clients are saying</h2>
                </div>
                </Col>
            </Row>
            <Row>
                <Col lg={7}>
                    <div className="test_img">
                        <img src={test_img} alt="" />
                        <img className='small_img' src={small_img} alt="" />
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="test_text">
                        <img src={test_bb} alt="" />
                        <h3>Save Time Managing Social Media For Your Business</h3>
                        <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly. <br /> <br /> Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
                        <img src={stars} alt="" />
                        <h4>Angela Taylor</h4>
                        <h5>CEO SAMSUNG</h5>
                    </div>
                </Col>
            </Row>
            <Row className="test_bottom">
                <Col lg={9}>
                    <span>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</span>
                </Col>
                <Col lg={3}>
                    <a href="#">Get Started</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonial