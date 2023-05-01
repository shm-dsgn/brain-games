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
      <div className="nav-block memory">
        <NavLink to="/memory" style={navLinkStyles}>
          Memory
        </NavLink>
      </div>

      <div className="nav-block scramble">
        <NavLink to="/scramble" style={navLinkStyles}>
          Scramble
        </NavLink>
      </div>

      <div className="nav-block response">
        <NavLink to="/response" style={navLinkStyles}>
          Response
        </NavLink>
      </div>
      
      <div className="nav-block auth">
        <NavLink to="/" style={navLinkStyles}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
