import React from 'react';
import { Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function AppNavbar() {
  return (

      
        <Nav className="justify-content-end" >
          <Nav.Link href="/Signup">Create Account</Nav.Link>
          <Nav.Link href="/">Login</Nav.Link>
          
        </Nav>
     

  );
}

export default AppNavbar;
