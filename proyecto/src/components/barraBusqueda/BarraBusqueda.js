import React, { useState } from "react";

const BarraBusqueda = () => {
    const [busqueda, setBusqueda] = useState();
    <input
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}></input>
}