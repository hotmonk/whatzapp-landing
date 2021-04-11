import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import "./customNavbar.css"
import Logo from "../assets/logow.png"
function customNavbar(){
    return (
<Navbar  expand="lg" lg>
  <Navbar.Brand href="/"><img className="navbarbrand" src={Logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#link">Pricing</Nav.Link>
      <Nav.Link href="#link">Download</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default customNavbar;