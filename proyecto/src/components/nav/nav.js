// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./nav.css";
// import logo from "./img/logo.png";
// import BarraBusqueda from '../barraBusqueda/BarraBusqueda';
// import { AccesoUsuario } from './accesoUsuario';



// function Nav() {
// 	return (
// 		<nav class="navbar bg-light sticky-top navbar-expand-lg p-0">
// 			<div class="container-fluid">
// 				<Link class="navbar-brand" to={'/'}><img src={logo} alt="Logo" /></Link>
// 				<form class="form-inline d-flex w-50">
// 					{/* <input class="form-control mr-sm-2 w-100" type="search" placeholder="Buscar" aria-label="Search" /> */}
// 					<BarraBusqueda/>
// 				</form>
// 				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
// 					<span class="navbar-toggler-icon"></span>
// 				</button>
// 				<div class="collapse navbar-collapse" id="main_nav">
// 					<ul class="navbar-nav">
// 						<li class="nav-item dropdown has-megamenu">
// 							<Link class="nav-Link dropdown-toggle" to={'/'} data-bs-toggle="dropdown"><span class="navbar-toggler-icon"></span></Link
// 							<div class="dropdown-menu megamenu" role="menu">
// 								<div class="row g-3 text-center">
// 									<div class="col-lg-3 col-6">
// 										<div class="col-megamenu">
// 											<h6 class="title">Title Menu Two</h6>
// 											<ul class="list-unstyled">
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 											</ul>
// 										</div>
// 									</div>
// 									<div class="col-lg-3 col-6">
// 										<div class="col-megamenu">
// 											<h6 class="title">Title Menu Two</h6>
// 											<ul class="list-unstyled">
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 											</ul>
// 										</div>
// 									</div>
// 									<div class="col-lg-3 col-6">
// 										<div class="col-megamenu">
// 											<h6 class="title">Title Menu Three</h6>
// 											<ul class="list-unstyled">
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 											</ul>
// 										</div>
// 									</div>
// 									<div class="col-lg-3 col-6">
// 										<div class="col-megamenu">
// 											<h6 class="title">Title Menu Four</h6>
// 											<ul class="list-unstyled">
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 												<li><Link to={'/'}>Custom Menu</Link</li>
// 											</ul>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</li>
// 				</ul>
// 			</div>
// 				<LinkccesoUsuario/>
// 			</div>
// 		</nav>
// 	);
// 	}

// export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import logo from "./img/logo.png";
import { AccesoUsuario } from './accesoUsuario';
import BarraBusqueda from '../barraBusqueda/BarraBusqueda';

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
