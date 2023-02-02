import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/blacklogo.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo">
        <img src={img} className="logo-img" alt="space pic" />
        <h2>Space Traveler&apos;s Hub</h2>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink className="link" to="/">Rockets</NavLink>
        </li>
        <li><NavLink className="link" to="/mission">Missions</NavLink></li>
        <li><NavLink className="link prof" to="/profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
