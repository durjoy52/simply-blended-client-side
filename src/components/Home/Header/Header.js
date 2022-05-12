import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { auth } from '../../../firebase/firebase.init';
import logo from '../../../images/logo/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
  const [user] = useAuthState(auth);
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
      <Nav.Link as={CustomLink} to="/manage">Inventories</Nav.Link>
      <Nav.Link as={CustomLink} to="/add"><IoMdAddCircleOutline/> Add Item</Nav.Link>
    </Nav>
    <Nav>
      {
        user ?
           <>
           <img className='photoUrl' src={user?.photoURL} alt="" />
         <NavDropdown id="collasible-nav-dropdown">
         <NavDropdown.Item as={CustomLink} to='/add'>Add Item</NavDropdown.Item>
         <NavDropdown.Item as={CustomLink} to='/manage'>Manage Item</NavDropdown.Item>
         <NavDropdown.Item as={CustomLink} to='/myitem'>My Item</NavDropdown.Item>
         <NavDropdown.Divider />
        <NavDropdown.Item onClick={()=>signOut(auth)} as={CustomLink} className='logout' to="/login">Logout
        </NavDropdown.Item>
       </NavDropdown>
           </>
        : <Nav.Link as={CustomLink}  to="/login"><AiOutlineLogin/>Login</Nav.Link>
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