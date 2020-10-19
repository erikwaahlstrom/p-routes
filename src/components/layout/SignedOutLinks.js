import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Users
          </NavLink>
          <NavLink to="/" className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SignedOutLinks;
