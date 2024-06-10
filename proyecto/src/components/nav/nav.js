// src/components/nav/nav.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./img/logo.png";
import { AccesoUsuario } from "./accesoUsuario";
import BarraBusqueda from "../barraBusqueda/BarraBusqueda";
import { cerrarSesion } from "../../services/api";
import { getCookie } from "../../services/cookies";



function Nav() {
  const [userEmail, setEmail] = useState(getCookie('UserEmail'));
  useEffect(() => {
    const updateEmail = () => {
      setEmail(getCookie('UserEmail'));
  };

  // Llamar a la función para actualizar el email inicialmente
  updateEmail();

  // Selecciona todos los elementos con la clase 'private'
  const privateElements = document.querySelectorAll('.private');
    
  // Muestra u oculta los elementos según la existencia de la cookie
  privateElements.forEach(element => {
      if (userEmail) {
          // Si la cookie existe, muestra los elementos
          element.style.display = 'block';
      } else {
          // Si la cookie no existe, oculta los elementos
          element.style.display = 'none';
      }
  });

  const privateElements2 = document.querySelectorAll('.private2');

  // Muestra u oculta los elementos según la existencia de la cookie
  privateElements2.forEach(element => {
      if (userEmail) {
          // Si la cookie existe, muestra los elementos
          element.style.display = 'none';
      } else {
          // Si la cookie no existe, oculta los elementos
          element.style.display = 'block';
      }
  });

  // Agregar un listener para detectar cambios en la cookie UserEmail
  const interval = setInterval(updateEmail, 1000); // Puedes ajustar el intervalo según sea necesario

  // Limpiar el intervalo cuando el componente se desmonte
  return () => clearInterval(interval);
    
        
  }, [userEmail])
  return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0 mb-2">
				<div class="container-fluid">
					<Link class="navbar-brand mx-4" to={'/'} ><img src={logo} alt="Logo" /></Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
						<span class="navbar-toggler-icon"></span>
					</button>
					<form>
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
