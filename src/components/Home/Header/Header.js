import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogInCircle, BiLogOut } from 'react-icons/bi';
import { auth } from '../../../firebase/firebase.init';
import logo from '../../../images/logo/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
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
      {
        user ? <Nav.Link onClick={()=>signOut(auth)} as={CustomLink} to="/login"><BiLogOut/>Log-out</Nav.Link> : <Nav.Link as={CustomLink}  to="/login"><BiLogInCircle/>Login</Nav.Link>
      }
      
      
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