import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import "./customNavbar.css"
import Logo from "../assets/logow.png"
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";

function CustomNavbar(props){
  let history = useHistory();

  const logoutHandler=()=>{
    props.LogOutHandler();
    localStorage.removeItem("mobile");
    history.push("/");
  }
  console.log(props.loggedIn)
    return (
<Navbar  expand="lg" lg>
  <Navbar.Brand href="/"><img className="navbarbrand" src={Logo}></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#link">Pricing</Nav.Link>
      <Nav.Link href="#link">Download</Nav.Link>
      {props.loggedIn?
      <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>:
      <Nav.Link href="/login">Login</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
const mapStateToProps=state=>{
  return {
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    LogInHandler: (mobile)=> dispatch({type: 'LOGIN', mobile:mobile}),
    LogOutHandler: ()=> dispatch({type: 'LOGOUT'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);