import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetPublicacionesXnombre } from "../../services/api";

const BarraBusqueda = ({ setResults }) => {
    const [busqueda, setBusqueda] = useState();
    const { usuario, cargando, error } = null;

    const handleChange = (value) => {
        setBusqueda(value)
        usuario, cargando, error = GetPublicacionesXnombre(value);
        setResults(usuario)
    }

    return (
        <div>
            <input
                type="search"
                className="form-control mr-sm-2 w-100"
                placeholder="Buscar..."
                value={busqueda}
                onChange={(e) => handleChange(e.target.value)}/> 
        </div>
    )
}

export default BarraBusqueda;