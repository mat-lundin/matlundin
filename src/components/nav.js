import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IoHome } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";


const nav = () => {
  return (
    <Navbar collapseOnSelect expand="md" style={{ backgroundSize: 'cover', backgroundColor: "gray" }}>
      <Navbar.Brand style={{ margin: 10, padding: 0, paddingLeft: "3%", color: "#FFFFFF", fontSize: "2.5em" }} href="/" >Mat Lundin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse" style={{ paddingRight: "3%" }}>

        <Nav className="justify-content-end" style={{ width: "100%" }}>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}><IoHome></IoHome>Home</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/dev' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}><IoCodeSlashOutline></IoCodeSlashOutline>Projects&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/blog' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}><IoNewspaperOutline></IoNewspaperOutline>Tech Blog&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/music' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}><IoMusicalNoteOutline></IoMusicalNoteOutline>Music&nbsp;</NavLink>

          <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/resume' style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#1D253F', fontSize: '2em'
          })}><IoDocumentTextOutline></IoDocumentTextOutline>Resume&nbsp;</NavLink>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}

export default nav