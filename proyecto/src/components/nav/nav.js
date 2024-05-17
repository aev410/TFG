import React from 'react';
import "./nav.css";

function nav() {
    return (
        <nav class="navbar navbar-expand-xl sticky-top navbar-light">
        <a class="ms-3 navbar-brand" href="/MetaversoMEDAC/index.php#body">
          <img
            width="170px"
            src="/MetaversoMEDAC/assets\logo-fundacion\FUNDACION_MEDAC_imagotipo_horizontal_azul_RGB.svg"
            alt="Logotipo de MEDAC"
        /></a>
      
        <button
          class="navbar-toggler py-3 me-3 col-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span onclick="changeI(this)" class="fa-solid fa-bars fa-lg"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="nCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link mx-3 aUnL" href="/MetaversoMEDAC/index.php#body"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3 aUnL" href="/MetaversoMEDAC/index.php#gallery"
                >Galería
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3 aUnL" href="/MetaversoMEDAC/index.php#video"
                >Trailer</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link aUnL mx-3" href="/MetaversoMEDAC/index.php#contact"
                >Contacto</a
              >
            </li>
            <li class="nav-item pb-md-3 pb-xs-3 pb-lg-0">
              <a class="nav-link aUnL mx-3" href="/MetaversoMEDAC/faq/faq.php"
                >Más información</a
              >
            </li>
            <li class="nav-item mx-lg-0 me-lg-3 mx-3">
              <a
                class="text-decoration-none d-grid m-sm-3 m-md-0 mx-auto"
                href="/MetaversoMEDAC\login\login.php"
              >
                <button
                  id="btnEntrar"
                  type="button"
                  class="rounded-pill mx-md-3 btn btn-lg d-grid"
                >
                  Entra al metaverso
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  export default nav;