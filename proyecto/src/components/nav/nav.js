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
    </div>
  );
}

export default Nav;
