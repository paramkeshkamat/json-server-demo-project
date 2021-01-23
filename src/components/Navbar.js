import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="Navbar container">
      <nav>
        <div className="title">
          <Link to="/">
            <h1>The Blog Page</h1>
          </Link>
          <button
            className="hamburger"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <GoThreeBars />
          </button>
        </div>
        <div className={`links ${showNavbar && "show-navbar"}`}>
          <Link to="/">Home</Link>
          <Link to="/create">Add Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
