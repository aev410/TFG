import React, { useState } from "react";
import axios from 'axios';
import './registrarTienda.css'
import { useNavigate } from 'react-router-dom'
const RegistrarTienda = () => {
    const Navigate = useNavigate()
    const [nombreTienda, setNombreTienda] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const token = localStorage.getItem('authToken');
    console.log("TOKEN DE LOCALSTORAGE PARA MANDAR TIENDA: " + token);

    const submitForm = async (e) => {
        e.preventDefault();

        const data = {
            nombreTienda: nombreTienda,
            telefono: telefono,
            direccion: direccion
        };

        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.post('http://localhost:3000/tienda', data, headers)
            .then(response => {
                console.log('Respuesta del servidor:', response.data);
                Navigate('/user');
            })
            .catch(error => {
                console.error('Error al realizar la petición:', error);
            });
    };

    return (
        <form onSubmit={submitForm} id="tienda-form">
            <div className='input tienda-input'>
                Nombre de la tienda:
                <input className="input-box" type="text" value={nombreTienda} onChange={(e) => setNombreTienda(e.target.value)} required />
            </div>
            <div className='input tienda-input'>
                Teléfono de contacto:
                <input className="input-box" type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
            <div className='input tienda-input'>
                Dirección de contacto:
                <input className="input-box" type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            </div>

            <button type="submit" id="button-tienda">Subir Publicación</button>
        </form>
    );
};

export default RegistrarTienda