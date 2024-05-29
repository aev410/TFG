import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import logo from "./img/logo.png";

// Navbar 
function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <form className="form-inline d-flex w-50">
          <input className="form-control mr-sm-2 w-100" type="search" placeholder="Busca vinilos" aria-label="Search" />
        </form>
        <div className="d-flex">
          <Link to="/login">
            <button className="btn btn-outline-success mr-2" type="button">Regístrate o inicia sesión</button>
          </Link>
          <button className="btn btn-primary" type="button">Vender</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
