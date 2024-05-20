import React from 'react';
import "./nav.css";
import logo from "./img/logo.png";

// navbar 
function nav() {
  return (
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href=" ">
        <img src={logo} alt="Logo" />
      </a>
      <form class="form-inline d-flex w-50">
        <input class="form-control mr-sm-2 w-100" type="search" placeholder="Busca vinilos" aria-label="Search" />
      </form>
      <div class="d-flex">
        <button class="btn btn-outline-success mr-2" type="button">Regístrate o inicia sesión</button>
        <button class="btn btn-primary" type="button">Vender</button>
      </div>
    </div>
  </nav>
  );
}
export default nav;