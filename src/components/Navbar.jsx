import React from "react";
import { Link } from "react-router-dom";
import ToggleBtn from "./ToggleBtn";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark p-3 navbar-dark">
      <Link className="navbar-brand" to="#">
        My Book App
      </Link>

      <ul className="navbar-nav ms-auto p-3 flex gap-14" >
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/addBooks" className="nav-link">
            Addbooks
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signup" className="btn btn-primary">
            Signup
          </Link>
        </li>

        <li style={{marginLeft:"16px" , marginTop:"10px " }} >
          <ToggleBtn/>
        </li>
        
      </ul>

    </nav>
  );
};

export default Navbar;
