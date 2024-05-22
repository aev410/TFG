import React, { useState, useEffect } from "react";
import axios from 'axios';

const VistaUser = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.post('http://localhost:3000/user', {idUsuario: 1});
                console.log(response.data);
                setUserData(response.data.userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);
    return (
        <div>
            { /*Esto es un operador condicional(if) ternario, basicamente si userData existe y no es null se escribe lo que esta dentro del primer parentesis, pero si no
                se escribe lo que esta despues de ':', en este caso una pantalla de loading*/ }
            {userData ? (
                <div>
                    <h2>User Data:</h2>
                    <p>Nombre: {userData.nombre + ' ' + userData.apellido}</p>
                </div>   
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default VistaUser;