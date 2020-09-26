import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        useContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink activeClassName="active" exact to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink activeClassName="active" exact to="/login" className="nav-item nav-link">Login</NavLink>
          <NavLink activeClassName="active" exact to="/about" className="nav-item nav-link">About</NavLink>
        </ul>
      </div>
    </nav>
  );
};
