import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#search">
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="#join-community">
              <Button variant="outline-info">Join the community</Button>
            </Nav.Link>
            <NavDropdown title="Language" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#language-vietnam">
                <span style={{ marginRight: '10px' }}>
                  <img
                    src="https://www.countryflags.io/vn/flat/24.png"
                    alt="Vietnam Flag"
                  />
                </span>
                Vietnam
              </NavDropdown.Item>
              <NavDropdown.Item href="#language-indonesia">
                <span style={{ marginRight: '10px' }}>
                  <img
                    src="https://www.countryflags.io/id/flat/24.png"
                    alt="Indonesia Flag"
                  />
                </span>
                Indonesia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
