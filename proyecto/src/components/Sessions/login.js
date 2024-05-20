import React, { useState } from 'react';
import "./session.css";
import ValidadorCorreo from './formatoCorreo';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const correo = formData.get('correo');
            const contra = formData.get('contra');
            const response = await axios.post('http://localhost:3000/login', { correo, contra });
            console.log(response.data);
            setErrorMessage('');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage("*Credenciales incorrectas"); 
            } else {
                setErrorMessage('Error interno del servidor');
            }
        }
    };

    return (
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
                <button type="submit">Iniciar sesión</button>
            </form>
            <div className="bottom-text">
                <p>No tienes una cuenta? <Link to="/register" className="black-link">Registrarse</Link></p>
            </div>
        </div>
    );
}

export default Login;
