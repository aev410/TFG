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
              <a target="_blank" title="MEDAC logo" href="https://medac.es/" rel="noreferrer"
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
                href="https://www.linkedin.com/school/medac/" rel="noreferrer"
                ><i class="fa-brands fa-linkedin fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC twitter"
                class="iZoom"
                href="https://twitter.com/institutoMEDAC" rel="noreferrer"
                ><i class="fa-brands fa-x-twitter fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC youtube"
                class="iZoom"
                href="https://www.youtube.com/user/medacdeportesalud" rel="noreferrer"
                ><i class="fa-brands fa-youtube fa-xl"></i
              ></a>
              <a
                target="_blank"
                title="MEDAC tiktok"
                class="iZoom"
                href="https://www.tiktok.com/@institutomedac" rel="noreferrer"
                ><i class="fa-brands fa-tiktok fa-xl"></i
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">Formación</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a
              title="FP MEDAC presencial"
              target="_blank"
              href="https://medac.es/fp-presencial" rel="noreferrer"
              >FP presencial</a
            >
          </li>
          <li>
            <a
              title="FP MEDAC a distancia"
              target="_blank"
              href="https://medac.es/fp-a-distancia" rel="noreferrer"
              >FP a distancia</a
            >
          </li>
          <li>
            <a
              title="MEDAC cursos especialización"
              target="_blank"
              href="https://medac.es/cursos-especializacion-fp" rel="noreferrer"
              >Curso de Especialización</a
            >
          </li>
          <li>
            <a
              title="MEDAC master"
              target="_blank"
              href="https://medac.es/master" rel="noreferrer"
              >Másteres online</a
            >
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">MEDAC</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a target="_blank" href="https://medac.es/fundacion" rel="noreferrer"
              >Fundación MEDAC</a
            >
          </li>
          <li><a target="_blank" href="https://medac.es/blogs" rel="noreferrer">Blog</a></li>
          <li>
            <a
              target="_blank"
              href="https://secure.webpublication.es/406386/1944586/#page=1" rel="noreferrer"
              >Revista</a
            >
          </li>
          <li>
            <a target="_blank" href="https://medac.es/compromiso-y-canal-etico" rel="noreferrer"
              >Canal ético</a
            >
          </li>
          <li>
            <a target="_blank" href="https://medac.es/contacto" rel="noreferrer">Contacto</a>
          </li>
          <li>
            <a target="_blank" href="https://medac.es/trabaja-con-nosotros" rel="noreferrer"
              >Trabaja con nosotros</a
            >
          </li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-12 align-items-center">
        <h6 class="hFooter mb-2">Alumnos</h6>
        <ul class="list-unstyled ulFooter">
          <li>
            <a target="_blank" href="https://medac.instructure.com/" rel="noreferrer"
              >Aula Virtual</a
            >
          </li>
          <li>
            <a target="_blank" href="https://medac.es/preguntas-frecuentes" rel="noreferrer"
              >Preguntas frecuentes</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://medac.es/sobre-nosotros/practicas-en-empresas" rel="noreferrer"
              >Empresas colaboradoras</a
            >
          </li>
          <li>
            <a target="_blank" href="https://medac.es/opiniones-medac" rel="noreferrer"
              >Opiniones MEDAC</a
            >
          </li>
          <li>
            <a target="_blank" href="https://medac.es/portal-empleo" rel="noreferrer"
              >Portal de empleo</a
            >
          </li>
        </ul>
      </div>
    </div>


    <div class="row pt-2">
      <div class="politica col-md-6 col-xs-12">
        <a
          target="_blank"
          title="Política de privacidad MEDAC"
          href="https://medac.es/politica-de-privacidad" rel="noreferrer"
          >Política de privacidad</a
        >
        |
        <a
          target="_blank"
          title="Política de cookies MEDAC"
          href="https://medac.es/politica-de-cookies" rel="noreferrer"
          >Política de cookies</a
        >
        |
        <a
          target="_blank"
          title="Términos y condiciones MEDAC"
          href="https://medac.es/terminos-y-condiciones" rel="noreferrer"
          >Aviso legal</a
        >
      </div>
      <div class="politica col-md-6 col-xs-12 text-xs-center text-md-end">
        Copyright © 2024 MEDAC Instituto Oficial de Formación Profesional. Todos
        los derechos reservados.
      </div>
    </div>
  </div>
</footer>
  );
}
export default nav;