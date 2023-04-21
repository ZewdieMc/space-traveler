import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/planet_1.png';

const NavBar = () => (
  <header>
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
        <h1>Space Traveler&apos;s Hub</h1>
      </Link>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : { textDecoration: 'none' })}
          to="/"
        >
          Rockets
        </NavLink>
        <span>|</span>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : { textDecoration: 'none' })}
          to="/dragons"
        >
          Dragons
        </NavLink>
        <span>|</span>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : { textDecoration: 'none' })}
          to="/missions"
        >
          Missions
        </NavLink>
        <span>|</span>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : null)}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : { textDecoration: 'none' })}
          to="/profile"
        >
          My Profile
        </NavLink>
      </ul>
    </nav>
  </header>
);

export default NavBar;
