import React from 'react';
// import { Link } from 'react-router-dom';
import "./nav.css";
import logo from "./img/logo.png";


function Nav() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 mb-2">
				<div class="container-fluid">
					<a class="navbar-brand mx-4" href=" "><img src={logo} alt="Logo" /></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
						<span class="navbar-toggler-icon"></span>
					</button>
					<form class="d-flex w-100">
						<input class="form-control mx-2 " type="search" placeholder="Buscar" aria-label="Search" />
					</form>
					<div class="collapse navbar-collapse" id="main_nav">
						<button class="btn btn-outline-success mx-5" type="button"><b class=" ">Iniciar Sesion</b></button>
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
												<li><a class="dropdown-item" href=" ">Opción 1</a></li>
												<li><a class="dropdown-item" href=" ">Opción 2</a></li>
												<li><a class="dropdown-item" href=" ">Opción 3</a></li>
												<li><a class="dropdown-item" href=" ">Opción 4</a></li>
											</ul>
										</div>
										<div class="col-lg-6">
											<ul class="list-unstyled">
												<h6 class="dropdown-header">Título 1</h6>
												<li><hr class="dropdown-divider" /></li>
												<li><a class="dropdown-item" href=" ">Opción 1</a></li>
												<li><a class="dropdown-item" href=" ">Opción 2</a></li>
												<li><a class="dropdown-item" href=" ">Opción 3</a></li>
												<li><a class="dropdown-item" href=" ">Opción 4</a></li>
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
