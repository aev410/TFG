import React, { useState } from 'react';

const formPub = () => {
    const [formState, setFormState] = useState({
        titulo: '',
        categoria: '',
        precio: ''
    });

    const handleInputChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const jsonData = JSON.stringify(formState);
        console.log(jsonData);
        // Here you can send jsonData to your server or save it to a file
    };

    <form onSubmit={handleInputChange}>
        <label for="titulo">
            Titulo de tu publicacion:

        </label>
        <input type='text' id='titulo' name='titulo'/>

        <label for="categoria">
            Categoria:

        </label>
        <input type='text' list='categoria'/>
        <datalist id='categoria'>
            <option>Articulos</option>
            <option>Anuncios</option>
        </datalist>

        <label for="precio">
            Precio:

        </label>
        <input type='text' id='precio' name='precio'/>

        <label for="descripcion">
            Descripcion:

        </label>
        <textarea id='descripcion' name='descripcion'></textarea>

        <button type="submit">Submit</button>
    </form>
}

export default formPub;