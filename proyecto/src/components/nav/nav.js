// src/components/nav/nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import logo from "./img/logo.png";
import { AccesoUsuario } from './accesoUsuario';
import BarraBusqueda from '../barraBusqueda/BarraBusqueda';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to={'/'}><img src={logo} alt="Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex w-100">
            <BarraBusqueda />
          </form>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
              {/* Aquí puedes añadir más elementos de navegación si lo deseas */}
            </ul>
            <AccesoUsuario />
          </div>
        </div>
      </nav>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-lg-12">
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle my-4 r-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Todas las categorias
              </button>
              <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                <div className="container">
                  <div className="row text-center">
                    <div className="col-lg-6">
                      <ul className="list-unstyled">
                        <h6 className="dropdown-header">Título 1</h6>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 1</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 2</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 3</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 4</Link></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled">
                        <h6 className="dropdown-header">Título 2</h6>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 1</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 2</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 3</Link></li>
                        <li><Link className="dropdown-item" to={'/'}>Opción 4</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
