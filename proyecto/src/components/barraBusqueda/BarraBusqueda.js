// BarraBusqueda.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css"
import { GetPublicacionesXnombre } from '../../services/api';
import "./SearchBar.css"


const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { datos, error } = GetPublicacionesXnombre(busqueda);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputChange = (e) => {
        console.log(datos)
        setBusqueda(e.target.value);
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (

        <div>
            <input
                type="search"
                class="form-control mx-2"
                aria-label="Search"
                placeholder="Buscar..."
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={busqueda}
            />
            {(isFocused || busqueda.trim() !== '') && (
                <ul class="list-group w-100">
                <ul className="list-group position-absolute w-100 suggestions">
                    {datos && datos.map((publicacion) => (
                        <li key={publicacion.id} class="list-group-item">
                            {publicacion.nombre}
                        </li>
                    ))}
                </ul>
             )}
             {error && <div class="mt-2 alert alert-danger">{error}</div>}
        </div>
    )
};

export default BarraBusqueda;
