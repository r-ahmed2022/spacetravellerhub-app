import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let activeClassName = "underline";
    let activeStyle = {
        textDecoration: "none",
      };
    return (
        <header>
            <nav>
                <div>
                <h1 className="logo">Space logo</h1>
                </div>
                <ul className="nav-items">
                <li>
                    <NavLink to="/"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >Rocket
                    </NavLink>
                </li>
                <li><NavLink  to="mission"
                       style={({ isActive }) =>
                       isActive ? activeStyle : undefined
                     }>Missions</NavLink></li>
                <li><NavLink  to="profile"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>My Profile</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;