import React from 'react';
import { useAuth } from './authtentication';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Multi-Board App</Navbar.Brand>
      <Nav className="ml-auto">
        {user ? (
          <>
            <Nav.Link as={Link} to="/boards">Boards</Nav.Link>
            <Button variant="outline-light" onClick={logout}>Logout</Button>
          </>
        ) : (
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
