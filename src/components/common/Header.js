import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#009dcf" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
