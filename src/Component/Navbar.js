import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

const NavCpn=() =>
{
return (

<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">My Website</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Form inline>
  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
  <Button variant="outline-info">Search</Button>
</Form>
</Navbar>

);
}

export default NavCpn;