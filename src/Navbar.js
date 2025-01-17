import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          WM
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/github">Github</a>
          </li>
          <li>
            <a href="/linkedin">LinkedIn</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
