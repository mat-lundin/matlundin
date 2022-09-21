import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const nav = () => {
  return (
    // replace brand image
    // make background a gradient from dark on the left to light on the right so you can see the options once they are left-justified
    <Navbar collapseOnSelect expand="md" style={{ backgroundSize: 'cover', backgroundColor: "gray" }}>
      <Navbar.Brand style={{ margin: 10, padding: 0, paddingLeft:"3%", color: "#FFFFFF", fontSize: "2.5em" }} href="/" >Mat Lundin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse" style={{paddingRight:"3%"}}>

        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/dev' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}>Projects&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/blog' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}>Tech Blog&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/music' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}>Music&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/resume' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}>Resume&nbsp;</NavLink>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default nav