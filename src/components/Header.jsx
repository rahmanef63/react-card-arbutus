import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Rahman</a>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleDarkMode} className="btn btn-ghost ml-4">
          Toggle Dark/Light Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
