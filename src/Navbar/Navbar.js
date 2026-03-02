import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-indigo-600 shadow-lg backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold text-white hover:text-indigo-500 transition"
        >
          Will Mo
        </NavLink>

        {/* Links */}
        <div className="flex gap-8 text-white font-medium">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `hover:text-indigo-500 transition ${
                isActive ? "text-indigo-500" : ""
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-indigo-500 transition ${
                isActive ? "text-indigo-500" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
