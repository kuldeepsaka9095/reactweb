import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">ReactWEB</Navbar.Brand>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" className="btn btn-primary btn-sm">LOGIN</a>
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
