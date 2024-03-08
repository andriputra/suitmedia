import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar collapseOnSelect expand="lg" bg={scrolled ? 'light' : 'transparent'} variant="light" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Brand href="#home" className="me-auto">
            <img src={require('../../src/assets/img/logo.png')} alt="image"/>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#search" className="hidden-xs">
                <Form className="d-flex" role="search">
                    <Button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
                    <Form.Control className="form-control me-2" type="search" placeholder="Search something here!" aria-label="Search"/>
                </Form>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#join-community" className="button-join">
              <Button variant="outline-info">Join the community</Button>
            </Nav.Link>
            <NavDropdown title="VND" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#language-indonesia">
                Indonesia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#search" className="show-xs mobile-only">
            <Form className="d-flex" role="search">
                <Button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></Button>
                <Form.Control className="form-control me-2" type="search" placeholder="Search something here!" aria-label="Search"/>
            </Form>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
