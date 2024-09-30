import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometerAlt, faCog, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import a CSS file for styling

function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        {/* Add your logo here */}
        <img src="/public/logo.png" alt="Logo" className="logo-image" /> {/* Replace with your logo path */}
        <h1>IDS</h1> {/* Shortened name due to space */}
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="icon" /> {/* Home icon */}
            <span>Home</span> {/* Link text */}
          </Link>
        </li>
        <li>
          <Link to="/Dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" /> {/* Dashboard icon */}
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} className="icon" /> {/* Settings icon */}
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/Signup">
            <FontAwesomeIcon icon={faUserPlus} className="icon" /> {/* Sign Up icon */}
            <span>Sign Up</span>
          </Link>
        </li>
        <li>
          <Link to="/Login">
            <FontAwesomeIcon icon={faSignInAlt} className="icon" /> {/* Login icon */}
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
