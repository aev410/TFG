import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetPublicacionesXnombre } from "../../services/api";

const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState();
    const { usuario, cargando, error } = null;

    const handleChange = (value) => {
        setBusqueda(value)
       usuario, cargando, error = GetPublicacionesXnombre(value);
    }

    return (
        <div>
            <input
                type="search"
                className="form-control me-2"
                placeholder="Buscar..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}/> 
        </div>
    )
}