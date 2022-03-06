import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import logo from './Logo.png'
import './style.css'

export default function MainNav() {
  return (
    <Navbar id='navbar' variant='dark' expand="lg" sticky='top'>
      <Navbar.Brand href="/" className='mx-2'>
        <img src={logo} width="22px" height="20px" alt=""className="d-inline-block me-2"/>
        LuukOriginal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown menuVariant="dark" title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="MacroProgram">MacroProgram</NavDropdown.Item>
            <NavDropdown.Item href="ProjectMV">Project MV</NavDropdown.Item>
            <NavDropdown.Item href="OpenCV">Open CV</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Projects">More</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}
