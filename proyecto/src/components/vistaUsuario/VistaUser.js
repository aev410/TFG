import React, { useState, useEffect } from "react";
import VistaPub from "../vistaPublicacion/vistaPub";
import axios from 'axios';

const VistaUser = () => {
    const [userData, setUserData] = useState(null);
    const [storeData, setStoreData] = useState(null);
    const [publicaciones, setPublicacionesData] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:3000/user', { idUsuario: 4 })
            .then((response) => {
                console.log(response.data);
                setUserData(response.data.userData);
                if (response.data.storeData) {
                    setStoreData(response.data.storeData);
                    setPublicacionesData(response.data.publicacionData);
                }
            })
            .catch((error) => {
                console.error(error);
            })

    }, []);
    console.log(publicaciones)
    return (
        <div>
            { /*Esto es un operador condicional(if) ternario, basicamente si userData existe y no es null se escribe lo que esta dentro del primer parentesis, pero si no
                se escribe lo que esta despues de ':', en este caso una pantalla de loading*/ }
            {userData ? (
                storeData ? (
                    <div>
                        <h2>Publicaciones de la tienda: </h2>
                        <VistaPub id={publicaciones.idPublicacion}/>
                    </div>
                ) : (
                    <div>
                        <p>Nombre: {userData.nombre + ' ' + userData.apellido}</p>
                        <h2>Informacion de contacto:</h2>
                        <p>Correo electronico: {userData.correo}</p>
                   </div>
                    ) 
                ): (
                    <div>
                        <p>Loading...</p>
                    </div>
                )}

        </div>
    )
}

export default VistaUser;