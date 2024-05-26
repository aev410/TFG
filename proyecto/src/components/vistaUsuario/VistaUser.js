import React, { useState, useEffect } from "react";
import VistaPub from "../vistaPublicacion/vistaPub";
import axios from 'axios';
import './vista.css';

const VistaUser = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Starting data fetch...");
            try {
                const response = await axios.get('http://localhost:3000/user/4');
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al buscar publicación: " + error);
            }
        };

        fetchData();
    }, []);

    if (!usuario) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    const { userData, storeData, publicacionData } = usuario;

    return (
        <div className="vista">
            <div className="user-card">
                <div className="user-content">
                    <h2>{userData.nombre} {userData.apellido}</h2>
                        {storeData ? (
                            <div>
                                <p>Email: {userData.correo}</p>
                                <p>Telefono: {storeData.telefono}</p>
                                <p>direccion: {storeData.direccion}</p>
                            </div>
                        ) : (
                            <div>
                                <p>
                                    Email: {userData.correo}
                                </p>
                            </div>
                        )}
                </div>
            </div>
            {storeData && (
                <div className="pub-zone">
                    <h2>Publicaciones de la tienda:</h2>
                    {publicacionData ? (
                        <div pub-content>
                            <VistaPub id={publicacionData.idpublicacion} />
                        </div>
                    ) : (
                        <p>No hay publicaciones disponibles.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default VistaUser;
