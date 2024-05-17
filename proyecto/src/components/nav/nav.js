import React from 'react';
import "./nav.css";

function nav() {
  return (
    <nav className="navbar navbar-expand-xl sticky-top navbar-light">
      <a className="ms-3 navbar-brand" href="/MetaversoMEDAC/index.php#body">
        <img
          width="170px"
          src="/MetaversoMEDAC/assets\logo-fundacion\FUNDACION_MEDAC_imagotipo_horizontal_azul_RGB.svg"
          alt="Logotipo de MEDAC"
        /></a>

      <button
        className="navbar-toggler py-3 me-3 col-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span onClick="changeI(this)" className="fa-solid fa-bars fa-lg"></span>
      </button>

      <div className="collapse navbar-collapse" id="nCollapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link mx-3 aUnL" href="/MetaversoMEDAC/index.php#body"
            >Inicio</a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3 aUnL" href="/MetaversoMEDAC/index.php#gallery"
            >Galería
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-3 aUnL" href="/MetaversoMEDAC/index.php#video"
            >Trailer</a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link aUnL mx-3" href="/MetaversoMEDAC/index.php#contact"
            >Contacto</a
            >
          </li>
          <li className="nav-item pb-md-3 pb-xs-3 pb-lg-0">
            <a className="nav-link aUnL mx-3" href="/MetaversoMEDAC/faq/faq.php"
            >Más información</a
            >
          </li>
          <li className="nav-item mx-lg-0 me-lg-3 mx-3">
            <a
              className="text-decoration-none d-grid m-sm-3 m-md-0 mx-auto"
              href="/MetaversoMEDAC\login\login.php"
            >
              <button
                id="btnEntrar"
                type="button"
                className="rounded-pill mx-md-3 btn btn-lg d-grid"
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