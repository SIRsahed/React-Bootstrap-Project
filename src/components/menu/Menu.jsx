import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import "./menu.css"
import logo from "../../assets/logo.png"

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="menu_bg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <NavDropdown title="Product" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Product 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Product 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Product 4
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Template" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Template 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Template 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Template 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Template 4
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='menu_ott'>Sign In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='menu_ott'>Start Free</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu