import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Users
          </NavLink>
          <NavLink to="/" className="nav-link">
            Logout
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SignedInLinks;
