// src/components/nav/nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./img/logo.png";
import { AccesoUsuario } from "./accesoUsuario";
import BarraBusqueda from "../barraBusqueda/BarraBusqueda";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 mb-2">
      <div className="container-fluid">
        <Link className="navbar-brand mx-4" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex w-100">
          <BarraBusqueda />
        </form>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
            {/* Aquí puedes añadir más elementos de navegación si lo deseas */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/publics/21">
                Ver Publicación
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newPub">
                Subir Publicación
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Publicación
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/publics/21">
                  Subir Publicación
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/newPub">
                  Ver publicacion
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Cuenta
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cuenta
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <AccesoUsuario />
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Cerrar sesión
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
