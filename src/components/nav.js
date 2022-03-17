
// Links plus Social media Links and Spiral Name

//import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'



const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
 <a className="navbar-brand" style={{margin: 0, padding: 0}} href="/"><img src="images/header.png" alt="Mat Lundin" width="80%"/></a>
 <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/resume' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2.5em'
  })}>Resume&nbsp;</NavLink>
   </li>
   <li className="nav-item">
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/about' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2.5em'
  })}>About&nbsp;</NavLink>
    </li>
    <li className="nav-item">
  <NavLink data-toggle="collapse" data-target="#navbarCollapse" className="nav-link" activeclassname="true" to='/music' style={({ isActive }) => ({
    color: isActive ? '#1D253F' : '#545e6f', fontSize: '2.5em'
  })}>Music&nbsp;</NavLink>
    </li>

        </ul>
     </div> 

</nav>
    )
}

export default Nav
