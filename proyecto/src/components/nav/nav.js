import React from 'react';
import "./nav.css";
import logo from "./img/logo.png";

// navbar 
function nav() {
  return (
    //   <nav class="navbar navbar-light bg-light p-0">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href=" ">
    //       <img src={logo} alt="Logo" />
    //     </a>
    //     <form class="form-inline d-flex w-50">
    //       <input class="form-control mr-sm-2 w-100" type="search" placeholder="Buscar" aria-label="Search" />
    //     </form>
    //     <div class="d-flex">
    //       <button class="btn btn-outline-success mr-2" type="button">Regístrate o inicia sesión</button>
    //       <button class="btn btn-primary" type="button">Vender</button>
    //     </div>
    //   </div>
    // </nav>
    <nav class="navbar bg-light sticky-top navbar-expand-lg p-0">
      <div class="container-fluid">
        <a class="navbar-brand" href=" "><img src={logo} alt="Logo" /></a>
        <form class="form-inline d-flex w-50">
           <input class="form-control mr-sm-2 w-100" type="search" placeholder="Buscar" aria-label="Search" />
        </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown has-megamenu">
              <a class="nav-link dropdown-toggle" href=" " data-bs-toggle="dropdown">Productos</a>
              <div class="dropdown-menu megamenu" role="menu">
              <div class="row g-3 text-center">		
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Title Menu Two</h6>
								<ul class="list-unstyled">
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
								</ul>
							</div> 
						</div>
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Title Menu Two</h6>
								<ul class="list-unstyled">
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
								</ul>
							</div> 
						</div>
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Title Menu Three</h6>
								<ul class="list-unstyled">
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
								</ul>
							</div> 
						</div>    
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Title Menu Four</h6>
								<ul class="list-unstyled">
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
									<li><a href=" ">Custom Menu</a></li>
								</ul>
							</div>  
						</div>
					</div> 
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
			<button class="btn btn-outline-success" type="button">Regístrate o inicia sesión</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default nav;