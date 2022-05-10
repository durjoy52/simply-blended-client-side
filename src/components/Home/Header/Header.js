import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogInCircle } from 'react-icons/bi';
import logo from '../../../images/logo/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
                  <Navbar sticky="top" collapseOnSelect expand="lg"
                  className='nav-bar'>
  <Container>
  <Navbar.Brand as={CustomLink} to="/home"><img src={logo} height={45} width={90} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={CustomLink} to='/'><AiOutlineHome/>Home</Nav.Link>
      <Nav.Link as={CustomLink} to="/pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={CustomLink} to="/login"><BiLogInCircle/>Login</Nav.Link>
      <Nav.Link as={CustomLink}  to="/blogs">
        Blogs
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;