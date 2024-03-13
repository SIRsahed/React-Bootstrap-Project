import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./software.css"
import soft1 from "../../assets/soft1.png"
import soft2 from "../../assets/soft2.png"

const Software = () => {
  return (
    <section id="soft">
        <Container>
        <Row>
            <h5 className='soft_head'>Over 32k+ software  businesses growing with AR Shakir</h5>
        </Row>
        <Row>
            <Col>
                <img src={soft1} alt="" />
            </Col>
            <Col>
                <img src={soft2} alt="" />
            </Col>
            <Col>
                <img src={soft1} alt="" />
            </Col>
            <Col>
                <img src={soft2} alt="" />
            </Col>
            <Col>
                <img src={soft1} alt="" />
            </Col>
            <Col>
                <img src={soft2} alt="" />
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Software