import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
                  <Navbar fixed="top" collapseOnSelect expand="lg"
                  className='nav-bar'>
  <Container>
  <Navbar.Brand as={CustomLink} to="/home"><img src={logo} height={45} width={90} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={CustomLink} to='/'>Features</Nav.Link>
      <Nav.Link as={CustomLink} to="/pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
      <Nav.Link as={CustomLink}  to="/memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;