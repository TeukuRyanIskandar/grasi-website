import { Outlet, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav role="navigation" className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">GRASI</Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start"></div>
            <div className="navbar-end">
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/OurWork">Our Work</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/Donate"><button className="donate-button">Donate</button></Link>
            </li>
          </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;