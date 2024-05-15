import React, { useState } from 'react';
import axios from 'axios';
import Map from '../google-map/map';
import Autofill from '../google-map/menus/autofillMaps';
import "./form.css";

const UploadItem = () => {
    const currentDate = new Date();
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);
    const [imagenes, setImagenes] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('precio', precio);
        formData.append('descripcion', descripcion);
        formData.append('fecha_pub', currentDate);
        formData.append('latitud', latitud);
        formData.append('longitud', longitud);
        formData.append('imagenes', imagenes);

        try {
            const response = await axios.post('http://localhost:3000/api/publicacion', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={submitForm}>
            <div className='input'>
                Precio:
                <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            </div>
            <div className='input'>
                Descripcion:
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </div>
            <div className='input'>
                Subir Imagen:
                <input type="file" onChange={(e) => setImagenes(e.target.files[0])} required />
            </div>
            <div className='input'>
                Seleccionar Ubicacion:
                <Map Menu={Autofill} setOfficeLocation={({ lat, lng }) => { setLatitud(lat); setLongitud(lng); }} />
            </div>
            <button type="submit">Subir Publicacion</button>
        </form>
    );
};

export default UploadItem;
