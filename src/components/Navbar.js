import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const activeClassName = "active";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            My Apps
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? activeClassName : undefined}}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? activeClassName : undefined}}`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? activeClassName : undefined}}`}
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="py-3">{props.children}</div>
    </>
  );
};

export default Navbar;
