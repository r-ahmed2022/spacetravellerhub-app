import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/planet.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo">
        <img src={img} className="logo-img" alt="space pic" />
        <h2>Space Traveller Hub</h2>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink className="link" to="/">Rockets</NavLink>
        </li>
        <li><NavLink className="link" to="/mission">Missions</NavLink></li>
        <li><NavLink className="link" to="/profile">Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
