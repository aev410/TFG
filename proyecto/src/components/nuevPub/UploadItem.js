import React, { useState } from 'react';
import axios from 'axios';
import Map from '../google-map/map';
import Autofill from '../google-map/menus/autofillMaps';
import 'bootstrap/dist/css/bootstrap.min.css';
import './uploadItem.css';

const UploadItem = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenes, setImagenes] = useState('');
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();
    
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
            //Checa si estan subiendo mas de 5 archivos a la vez    
            } else if (file.length > 5){
                alert('Error: Maximo 5 imagenes por publicacion.')
                return;
            }
        }

        //Aqui creamos el objeto para subir todo a servidor
        const formData = new FormData();
        formData.append('nombre', nombre)
        formData.append('precio', precio);
        formData.append('descripcion', descripcion);
        formData.append('latitud', lat);
        formData.append('longitud', lon);
        //Mediante este for subimos cada uno de los archivos que elija el usuario
        for (let i = 0; i < imagenes.length; i++) {
            formData.append('imagenes', imagenes[i]);
        }

        //Aqui enviamos la peticion al servidor node
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
        <form onSubmit={submitForm} className="container-fluid" id="pub-form">
            <div className="row justify-content-center">
                <div className="form-group mb-4 p-3 rounded" id="input-pub">
                    <label htmlFor="nombre">Titulo:</label>
                    <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group mb-4 p-3 rounded" id="input-pub">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" className="form-control" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group mb-4 p-3 rounded" id="input-pub">
                    <label htmlFor="descripcion">Descripcion:</label>
                    <textarea className="form-control" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group mb-4 p-3 rounded" id="input-pub">
                    <p><label htmlFor="imagenes">Subir Imagen:</label></p>
                    <input type="file" className="form-control-file" id="imagenes" multiple onChange={(e) => setImagenes(e.target.files)} required />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="form-group mb-4 p-3 rounded" id="input-pub">
                    <label>Seleccionar Ubicacion:</label>
                    <Map Menu={Autofill} setLat={setLat} setLon={setLon} idCss={"up-pub"} />
                </div>
            </div>
            <div className="row justify-content-center">
                <button type="submit" className="btn mt-1" id="submit-pub" style={{width: "35%"}}>Subir Publicacion</button>
            </div>
        </form>
    );
    
};

export default UploadItem;
