import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <div>
        <h1 className="logo">Space logo</h1>
      </div>
      <ul className="nav-items">
        <li>
          <NavLink to="/">
            Rocket
          </NavLink>
        </li>
        <li><NavLink to="mission">Missions</NavLink></li>
        <li><NavLink to="profile">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
