import { Link } from 'react-router-dom';
import "./nav.css";
import { getCookie } from '../../services/cookies';
import { useEffect, useState } from 'react';

export const AccesoUsuario = () => {
    const [email, setEmail] = useState(getCookie('UserEmail'));

    // useEffect para detectar cambios en la cookie UserEmail
    useEffect(() => {
        const updateEmail = () => {
            setEmail(getCookie('UserEmail'));
        };

        // Llamar a la función para actualizar el email inicialmente
        updateEmail();

        // Agregar un listener para detectar cambios en la cookie UserEmail
        const interval = setInterval(updateEmail, 1000); // Puedes ajustar el intervalo según sea necesario

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            {email != null ? (
                <Link to="/user">
                    <button className="btn btn-outline-success" type="button">
                        {email}
                    </button>
                </Link>
            ) : (
                <Link to="/register">
                    <button className="btn btn-outline-success" type="button">
                        Regístrate o inicia sesión
                    </button>
                </Link>
            )}
        </div>
    )
}