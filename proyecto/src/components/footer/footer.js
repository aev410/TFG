import React from 'react';
import "./footer.css";
import logo from "./img/logo.png";

// navbar 
function nav() {
  return (
    <footer
  class="footer d-flex justify-content-center justify-content-lg-between p-4"
  id="footer"
>
  <div class="container-fluid">
    <div class="row pt-4 justify-content-evenly">
      <div
        class="col-lg-3 col-md-12 justify-content-center align-middle text-center"
      >
        <div class="container">
          <div class="row g-4 align-middle">
            <div class="col-xs-12 col-md-6 col-lg-12">
              <a target="_blank" title="ASAAPP logo" href=" " rel="noreferrer"
                ><img
                  class="iFooter"
                  src={logo}
                  alt="Logotipo"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">ASAA APP</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              espacio 1
            </a>
          </li>
          <li><a target="_blank" href=" " rel="noreferrer">Blog</a></li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
            espacio 2
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
            espacio 3
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">Contacto</a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
            espacio 4
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">espacio 5</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a target="_blank" href=" " rel="noreferrer">
            espacio 6
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
            espacio 7
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
            espacio 8
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Opiniones 
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Portal de empleo 
            </a>
          </li>
        </ul>
      </div>
    </div>


    <div class="row pt-2">
      <div class="politica col-md-6 col-xs-12">
        <a
          target="_blank"
          title="Política de privacidad"
          href=" " rel="noreferrer"
          >Política de privacidad</a
        >
        |
        <a target="_blank" title="Política de cookies" href=" " rel="noreferrer"
          >Política de cookies
        </a>
        |
        <a target="_blank" title="Términos y condiciones" href=" " rel="noreferrer">
          Aviso legal
        </a>
      </div>
      <div class="politica col-md-6 col-xs-12 text-xs-center text-md-end">
        Copyright © 2024 ASAA APP Artesanías de la Sierra Alpujarreña de Almeria. Todos
        los derechos reservados.
      </div>
    </div>
  </div>
</footer>
  );
}
export default nav;