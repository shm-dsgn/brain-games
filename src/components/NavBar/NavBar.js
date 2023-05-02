import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <nav className="nav-section">
      <NavLink to="/" style={navLinkStyles}>
        <div className="nav-block home">Home</div>
      </NavLink>

      <NavLink to="/memory" style={navLinkStyles}>
        <div className="nav-block memory">Memory</div>
      </NavLink>

      <NavLink to="/scramble" style={navLinkStyles}>
        <div className="nav-block scramble">Scramble</div>
      </NavLink>

      <NavLink to="/response" style={navLinkStyles}>
        <div className="nav-block response">Response</div>
      </NavLink>

      <NavLink to="/profile" style={navLinkStyles}>
        <div className="nav-block auth">Profile</div>
      </NavLink>
    </nav>
  );
}

export default NavBar;
