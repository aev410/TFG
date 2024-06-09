// src/components/nav/nav.js
import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./img/logo.png";
import { AccesoUsuario } from "./accesoUsuario";
import BarraBusqueda from "../barraBusqueda/BarraBusqueda";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 mb-2">
        <div class="container-fluid">
          <Link class="navbar-brand mx-4" to={'/'}><img src={logo} alt="Logo" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <form>
            <BarraBusqueda />
          </form>
          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/publics/21">Ver Publicación</Link>
              </li>
			        <li class="nav-item">
                <Link class="nav-link" to="/newPub">Subir Publicación</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contacto</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Cuenta</Link>
              </li>
            </ul>
            <AccesoUsuario />
          </div>
        </div>
      </nav>
      <div class="container-fluid py-2">
        <div class="row">
          <div class="col-lg-12">
            <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle my-4 r-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Todas las categorías
              </button>
              <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                <div class="container">
                  <div class="row text-center">
                    <div class="col-lg-6">
                      <ul class="list-unstyled">
                        <h6 class="dropdown-header">Título 1</h6>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 1</Link></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 2</Link></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 3</Link></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 4</Link></li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul class="list-unstyled">
                        <h6 class="dropdown-header">Título 2</h6>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 1</Link></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 2</Link></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 3</Link></li>
                        <li><Link class="dropdown-item" to={'/'}>Opción 4</Link></li>
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
