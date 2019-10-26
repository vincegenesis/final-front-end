import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <div>
      <nav className="nav-links">
        <Link style={navStyle} to="/">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/register">
          <li>Register</li>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
