import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'



const nav = () => {
  return (
    <Navbar collapseOnSelect expand="md" style={{  backgroundSize: 'cover' }}>
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