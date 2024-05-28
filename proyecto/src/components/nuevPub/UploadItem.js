import React, { useState } from 'react';
import axios from 'axios';
import Map from '../google-map/map';
import Autofill from '../google-map/menus/autofillMaps';
import "./form.css";

const UploadItem = () => {
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenes, setImagenes] = useState('');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();

        //Check de formato, si precio es numerico
        if (isNaN(precio)) {
            alert('Error: Precio debe ser un número.');
            return;
        }
    
        // Check de formato, si descripcion excede 200 caracteres
        if (descripcion.length > 200) {
            alert('Error: Descripcion no debe exceder 200 caracteres.');
            return;
        }

        //Check de formato, si imagenes es jpg, jpeg o png
        for (let i = 0; i < imagenes.length; i++) {
            const file = imagenes[i];
            const extension = file.name.split('.').pop().toLowerCase();
            const allowedExtensions = ['jpg', 'jpeg', 'png'];
    
            if (!allowedExtensions.includes(extension)) {
                alert('Error: Solo formatos de imagenes aceptados (png, jpg, jpeg).');
                return;
            }
        }

        const formData = new FormData();
        formData.append('precio', precio);
        formData.append('descripcion', descripcion);
        formData.append('latitud', lat);
        formData.append('longitud', lon);
        for (let i = 0; i < imagenes.length; i++) {
            console.log('hola')
            formData.append('imagenes', imagenes[i]);
        }

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
                <input type='file' multiple onChange={(e) => setImagenes(e.target.files)} required />
            </div>
            <div className='input'>
                Seleccionar Ubicacion:
                <Map Menu={Autofill} setLat={setLat} setLon={setLon}/>
            </div>
            <button type="submit"
                >Subir Publicacion</button>
        </form>
    );
};

export default UploadItem;
