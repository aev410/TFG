import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Asegúrate de importar useNavigate

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();  // Inicializa useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/contact', formData);
      console.log(response.data);
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      });
      setErrorMessage('');
      setSuccessMessage('Formulario enviado con éxito');
      
      setTimeout(() => {
        navigate('/');  // Redirige a la vista de inicio después de un breve retraso
      }, 2000);  // Puedes ajustar el tiempo de retraso según lo que consideres adecuado

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Error interno del servidor');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="nombre" name="nombre" value={formData.nombre} maxLength="50" onChange={handleChange} required />
          <label htmlFor="nombre">Nombre</label>
          <div className="bar"></div>
        </div>
        <div className="input-group">
          <input type="email" id="correo" name="correo" value={formData.correo} maxLength="50" onChange={handleChange} required />
          <label htmlFor="correo">Correo</label>
          <div className="bar"></div>
        </div>
        <div className="input-group">
          <input type="text" id="asunto" name="asunto" value={formData.asunto} maxLength="100" onChange={handleChange} required />
          <label htmlFor="asunto">Asunto</label>
          <div className="bar"></div>
        </div>
        <div className="input-group">
          <textarea id="mensaje" name="mensaje" value={formData.mensaje} maxLength="500" onChange={handleChange} required />
          <div className="bar"></div>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
