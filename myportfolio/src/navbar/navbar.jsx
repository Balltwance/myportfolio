import React from 'react';
import './navbar.css';


const Navbar = () => {
    return (
        <header>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
    );
};

export default Navbar;