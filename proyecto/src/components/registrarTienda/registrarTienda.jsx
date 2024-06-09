import React, { useState } from "react";
import axios from 'axios';
import './registrarTienda.css'
import { Navigate } from 'react-router-dom'

const RegistrarTienda = () => {
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
        <form onSubmit={submitForm}>
            <div className='input'>
                Nombre de la tienda:
                <input type="text" value={nombreTienda} onChange={(e) => setNombreTienda(e.target.value)} required />
            </div>
            <div className='input'>
                Teléfono de contacto:
                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
            <div className='input'>
                Dirección de contacto:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            </div>

            <button type="submit">Subir Publicación</button>
        </form>
    );
};

export default RegistrarTienda