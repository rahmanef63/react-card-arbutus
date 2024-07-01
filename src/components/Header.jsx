import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar  bg-base-300 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Rahman</a>
        <div className="flex-none ">
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
      </div>
    </div>
  );
};

export default Header;
