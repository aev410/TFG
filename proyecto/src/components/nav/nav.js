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
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-0">
      <div className="container-fluid" id="nav-container">
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
        <form className="d-flex w-100" id="barra-busqueda">
          <BarraBusqueda />
        </form>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <Link className="dropdown-item private" to="/newPub">
                  Subir Publicación
                </Link>
                <div className="dropdown-divider private"></div>
                <Link className="dropdown-item" to="/publics">
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
              <Link className="nav-link private2" to="/login">
                Iniciar Sesion
              </Link>
            </li>
            <li className="nav-item dropdown  private">
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
                <div className="dropdown-divider private"></div>
                <Link className="dropdown-item private" to="#" onClick={cerrarSesion}>
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
