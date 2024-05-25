import React, { useState, useEffect } from "react";
import axios from 'axios';

const VistaUser = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        axios.post('http://localhost:3000/user', { idUsuario: 1 })
            .then((response) => {
                console.log(response.data);
                setUserData(response.data.userData);
            })
            .catch((error) => {
                console.error(error);
            })

    }, []);
    return (
        <div>
            { /*Esto es un operador condicional(if) ternario, basicamente si userData existe y no es null se escribe lo que esta dentro del primer parentesis, pero si no
                se escribe lo que esta despues de ':', en este caso una pantalla de loading*/ }
            {userData ? (
                <div>
                    <p>Nombre: {userData.nombre + ' ' + userData.apellido}</p>
                    <h2>Informacion de contacto:</h2>
                    <p>Correo electronico: {userData.correo}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default VistaUser;