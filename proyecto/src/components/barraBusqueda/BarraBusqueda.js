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

        <div style={{width: "100%"}}>
            <input
                type="search"
                className="form-control"
                placeholder="Buscar..."
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={busqueda}
            />
            {(isFocused || busqueda.trim() !== '') && (
                <ul className="list-group position-absolute w-100 suggestions">
                    {datos && datos.map((publicacion) => (
                        <li key={publicacion.idpublicacion} className="list-group-item">
                            <a href={`/publics/${publicacion.idpublicacion}`}>{publicacion.nombre}</a>
                        </li>
                    ))}
                </ul>
             )}
             {error && <div class="mt-2 alert alert-danger">{error}</div>}
        </div>
    )
};

export default BarraBusqueda;
