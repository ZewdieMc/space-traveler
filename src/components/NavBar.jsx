import { NavLink, Link } from 'react-router-dom';
import logo from '../images/planet_1.png';

const NavBar = () => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
          <h1>Space traveler&apos; Hub</h1>
        </Link>
        <div>
          <NavLink
            className="nav-items"
            to="/"
            style={navLinkStyle}
          >
            Rockets
          </NavLink>
          <NavLink
            className="nav-items"
            to="/missions"
            style={navLinkStyle}
          >
            Missions
          </NavLink>
          <span>|</span>
          <NavLink
            className="nav-items"
            to="/profile"
            style={navLinkStyle}
          >
            My Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
