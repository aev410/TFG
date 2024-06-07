// BarraBusqueda.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetPublicacionesXnombre } from '../../services/api';

const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { datos, error } = GetPublicacionesXnombre(busqueda);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="position-relative">
            <input
                type="search"
                className="form-control mx-2"
                placeholder="Buscar..."
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={busqueda}
            />
            {(isFocused || busqueda.trim() !== '') && (
                <ul className="list-group position-absolute w-100">
                    {datos && datos.map((publicacion) => (
                        <li key={publicacion.id} className="list-group-item">
                            {publicacion.nombre}
                        </li>
                    ))}
                </ul>
            )}
            {error && <div className="mt-2 alert alert-danger">{error}</div>}
        </div>
    );
};

export default BarraBusqueda;
