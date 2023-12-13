


import logo from '../Images/Untitled_design__9_-removebg-preview.png'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <h1 className="navbar-title">Meme Generator</h1>
        <img className='logo' src={logo} alt="" />
      
      </div>
    </nav>
  );
};

export default Navbar;
