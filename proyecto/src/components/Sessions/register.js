import React, { useState } from "react";
import "./session.css";
import ValidadorCorreo from './formatoCorreo';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    contra: '',
    correo: '',
    fechaNac: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', formData);
      console.log(response.data);
      setFormData({
        nombre: '',
        apellido: '',
        contra: '',
        correo: '',
        fechaNac: ''
      });
      setErrorMessage('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Error interno del servidor');
      }
    }
  };

  return (
    <div className="container-fluid" id="register-page">
      <div className="login-container">
        <h2>Crear una cuenta</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" id="nombre" name="nombre" value={formData.nombre} maxLength="50" onChange={handleChange} required />
            <label htmlFor="nombre">Nombre</label>
            <div className="bar"></div>
          </div>
          <div className="input-group">
            <input type="text" id="apellido" name="apellido" value={formData.apellido} maxLength="50" onChange={handleChange} required />
            <label htmlFor="apellido">Apellido</label>
            <div className="bar"></div>
          </div>
          <div className="input-group">
            <input type="date" id="fechaNac" name="fechaNac" value={formData.fechaNac} onChange={handleChange} required />
            <label htmlFor="fechaNac">Fecha de Nacimiento</label>
            <div className="bar"></div>
          </div>
          <div className="input-group">
            <input type="text" id="correo" name="correo" value={formData.correo} minLength="5" maxLength="50" onChange={handleChange} required />
            <label htmlFor="correo">Correo</label>
            <div className="bar"></div>
          </div>
          <div className="input-group">
            <input type="password" id="contra" name="contra" value={formData.contra} minLength="5" maxLength="50" onChange={handleChange} required />
            <label htmlFor="contra">Contraseña</label>
            <div className="bar"></div>
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <ValidadorCorreo />
          <button type="submit" className="session-submit">Registrarse</button>
        </form>
        <div className="bottom-text">
          <p>Ya tienes una cuenta?</p>
          <Link to="/login" className="black-link">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
