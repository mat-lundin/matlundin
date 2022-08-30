import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'



const nav = () => {
  return (
    // replace brand image
    // left justify nav options
    // make background a gradient from dark on the left to light on the right so you can see the options once they are left-justified
    <Navbar collapseOnSelect expand="md" style={{  backgroundSize: 'cover', backgroundColor:"gray" }}>
      <Navbar.Brand style={{ margin: 0, padding: 0 }} href="/"><img src="images/header.png" alt="Mat Lundin" width="80%" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse">


        <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/dev' style={({ isActive }) => ({
          color: isActive ? '#1D253F' : '#66FF00', fontSize: '2em'
        })}>Projects&nbsp;</NavLink>

        <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/music' style={({ isActive }) => ({
          color: isActive ? '#1D253F' : '#66FF00', fontSize: '2em'
        })}>Music&nbsp;</NavLink>

        <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/resume' style={({ isActive }) => ({
          color: isActive ? '#1D253F' : '#66FF00', fontSize: '2em'
        })}>Resume&nbsp;</NavLink>


      </Navbar.Collapse>

    </Navbar>
  )
}

export default nav