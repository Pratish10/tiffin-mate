import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <NavLink to="/" className="title">
          <div className="logo">tiffin mate</div>
        </NavLink>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : "close"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/franchise">Franchise</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ's</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
