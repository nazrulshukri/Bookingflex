// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './themeprovider'; // Custom theme hook
import './header.css'; // Import CSS file

import logo from '../img/assets/Booking.png'; // Update path as needed
import searchIcon from '../img/assets/search-w.png'; // Update path as needed

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode, toggleTheme } = useTheme(); // Use the custom hook
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <header className={`header ${isDarkMode ? 'darkMode' : 'lightMode'}`}>
      <div className="header-content">
        <img src={logo} alt="Booking Flex Logo" className="header-logo" />
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Check-in</Link></li>
            <li><Link to="/contact">Flight Status</Link></li>
            <li><Link to="/signup" className="signup-link">Sign Up</Link></li>
            <li><Link to="/signin" className="signup-link">Login</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          {/* Toggle Switch for Dark/Light Mode */}
          <div className={`switch-toggle ${isDarkMode ? 'checked' : ''}`} onClick={toggleTheme}>
            <div className="switch-toggle-knob"></div>
          </div>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
            <button type="submit">
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
