import React from 'react';
import "./footer.css";


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
              <a target="_blank" title="MEDAC logo" href=" " rel="noreferrer"
                ><img
                  class="iFooter"
                  src="assets/logo-vector/MEDAC_imagotipo_horiz_blanco_RGB.svg"
                  alt="Logotipo de MEDAC"
              /></a>
            </div>
            <div
              class="text-center iconFooter justify-content-center col-xs-12 col-md-6 col-lg-12 pb-4 pb-md-5 d-flex flex-nowrap"
            >
              <a
                target="_blank"
                title="MEDAC facebook"
                class="iZoom"
                href="https://www.facebook.com/institutomedac" rel="noreferrer"
                ><i class="fa-brands fa-facebook fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC instagram"
                class="iZoom"
                href="https://www.instagram.com/institutomedac" rel="noreferrer"
                ><i class="fa-brands fa-instagram fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC linkedin"
                class="iZoom"
                href=" " rel="noreferrer"
                ><i class="fa-brands fa-linkedin fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC twitter"
                class="iZoom"
                href=" " rel="noreferrer"
                ><i class="fa-brands fa-x-twitter fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC youtube"
                class="iZoom"
                href=" " rel="noreferrer"
                ><i class="fa-brands fa-youtube fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC tiktok"
                class="iZoom"
                href=" " rel="noreferrer"
                ><i class="fa-brands fa-tiktok fa-xl"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">MEDAC</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Fundación MEDAC
            </a>
          </li>
          <li><a target="_blank" href=" " rel="noreferrer">Blog</a></li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Revista
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Canal ético
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">Contacto</a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Trabaja con nosotros
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">Alumnos</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Aula Virtual
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Preguntas frecuentes
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
                Empresas colaboradoras
            </a>
          </li>
          <li>
            <a target="_blank" href=" " rel="noreferrer">
              Opiniones MEDAC
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