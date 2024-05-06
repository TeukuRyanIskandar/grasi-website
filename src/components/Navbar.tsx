import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
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
              <Link to="/Contact">ContactUs</Link>
            </li>
            <li>
              <Link to="/Donate">Donate</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Navbar;