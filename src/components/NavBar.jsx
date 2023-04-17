import { NavLink, Link } from 'react-router-dom';
import logo from '../images/planet_1.png';

const NavBar = () => (
  <header>
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
        <h1>Space traveler&apos; Hub</h1>
      </Link>
      <ul>
        <NavLink className="nav-items" to="/">
          Rockets
        </NavLink>
        <NavLink className="nav-items" to="/missions">
          Missions
        </NavLink>
        <span>|</span>
        <NavLink className="nav-items" to="/profile">
          My Profile
        </NavLink>
      </ul>
    </nav>
  </header>
);

export default NavBar;
