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

// Navbar 

function Nav() {
  return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 mb-2">
				<div class="container-fluid">
					<Link class="navbar-brand mx-4" to={'/'} ><img src={logo} alt="Logo" /></Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
						<span class="navbar-toggler-icon"></span>
					</button>
					<form class="d-flex w-100">
						{/* <input class="form-control mx-2 " type="search" placeholder="Buscar" aria-label="Search" /> */}
						<BarraBusqueda />
					</form>
					<div class="collapse navbar-collapse" id="main_nav">
						<AccesoUsuario />
					</div>
				</div>
			</nav>
			<div class="container-fluid py-2">
				<div class="row">
					<div class="col-lg-12">
						<div class="dropdown">
							<button class=" btn btn-primary dropdown-toggle my-4 r-5" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
								Todas las categorias
							</button>
							<div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
								<div class="container">
									<div class="row text-center">
										<div class="col-lg-6">
											<ul class="list-unstyled">
												<h6 class="dropdown-header">Título 1</h6>
												<li><hr class="dropdown-divider" /></li>
												<li><Link class="dropdown-item" to ={'/'}>Opción 1</Link></li>
												<li><Link class="dropdown-item" to={'/'}>Opción 2</Link></li>
												<li><Link class="dropdown-item" to={'/'}>Opción 3</Link></li>
												<li><Link class="dropdown-item" to={'/'}>Opción 4</Link></li>
											</ul>
										</div>
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