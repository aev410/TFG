import React from 'react';
// import { Link } from 'react-router-dom';
import "./footer2.css";


// Footer para dispositivos moviles
function Footer2() {
	return (
		<nav class="mobile-nav d-block d-lg-none">
        <div class="container-fluid">
            <ul class="nav justify-content-around">
                <li class="nav-item">
                    <a class="nav-link" href=" "><i class="fa-solid fa-house"></i> Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=" "><i class="fa-solid fa-user"></i> Perfil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=" "><i class="fa-solid fa-envelope"></i> Buzón</a>
                </li>
            </ul>
        </div>
    </nav>
	);
}

export default Footer2;
