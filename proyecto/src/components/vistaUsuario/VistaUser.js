import React, { useState, useEffect } from "react";
import VistaPub from "../vistaPublicacion/vistaPub";
import axios from 'axios';

const VistaUser = () => {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/4');
                console.log("respuesta: ", response)
                setDatos(response.data);
            } catch (error) {
                console.error("Error al buscar publicación: " + error);
            }
        };

        fetchData();
    }, []);

    console.log(datos);

    return (
        <div>
            {datos ? (
                datos.storeData ? (
                    <div>
                        <h2>Publicaciones de la tienda: </h2>
                        {datos.publicacionData ? (
                            <VistaPub id={datos.publicacionData.idpublicacion} />
                        ) : (
                            <p>No hay publicaciones disponibles.</p>
                        )}
                    </div>
                ) : (
                    <div>
                        <p>Nombre: {datos.userData.nombre + ' ' + datos.userData.apellido}</p>
                        <h2>Informacion de contacto:</h2>
                        <p>Correo electronico: {datos.userData.correo}</p>
                    </div>
                )
            ) : (
                <div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default VistaUser;
