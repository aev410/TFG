import React, { useState } from 'react';
import "./session.css";
import { useNavigate } from 'react-router-dom';
import ValidadorCorreo from './formatoCorreo';
import { Link } from "react-router-dom";
import axios from 'axios';
import { setCookie } from '../../services/cookies';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const correo = formData.get('correo');
        const contra = formData.get('contra');
        console.log('Datos enviados:', { correo, contra });
        axios.post('http://localhost:3000/login', {
            correo: correo,
            contra: contra
        })
        .then(response => {
            console.log(response.data);
            if (response.data.message === 'Inicio de sesión exitoso' && response.data) {
                // Almacenar el token en localStorage
                localStorage.setItem('authToken', response.data.data);
    
                setCookie('UserEmail', correo, 1);
    
                // Redirigir al usuario al inicio de la web
                setTimeout(() => {
                    navigate('/');
                }, 2000);
    
                setErrorMessage('');
            } else {
                console.error('Respuesta inesperada:', response.status);
                setErrorMessage('Error inesperado. Por favor, inténtalo de nuevo.');
            }
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage("*Credenciales incorrectas"); 
            } else {
                setErrorMessage('Error interno del servidor');
            }
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="login-container">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" id="correo" name="correo" minLength="5" maxLength="50" required />
                        <label htmlFor="correo">Correo</label>
                        <div className="bar"></div>
                    </div>
                    <ValidadorCorreo />
                    <div className="input-group">
                        <input type="password" id="contra" name="contra" minLength="5" maxLength="50" required />
                        <label htmlFor="contra">Contraseña</label>
                        <div className="bar"></div>
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit" className="session-submit">Iniciar sesión</button>
                </form>
                <div className="bottom-text">
                    <p>No tienes una cuenta? <Link to="/register" className="black-link">Registrarse</Link></p>
                </div>
                <div className="bottom-text">
                    <p>¿Quieres volver al inicio?</p>
                    <Link to="/" className="black-link">Ir al inicio</Link>
               </div>
            </div>
        </div>
    );
}

export default Login;
