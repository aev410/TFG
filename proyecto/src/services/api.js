import axios from 'axios';
import { useState, useEffect } from 'react';

const GetAllPublicaciones = () => {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/publicacion`);
                console.log("Publicación response:", response.data);
                setDatos(response.data);
            } catch (error) {
                console.error("Error al buscar publicación:", error);
                setError("Error al buscar publicación");
            }
        };

        fetchData();
    }, []);

    return { datos, error }
};

const usePublicacion = (id) => {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/publicacion/${id}`);
                console.log("Publicación response:", response.data);
                setDatos(response.data);
            } catch (error) {
                console.error("Error al buscar publicación:", error);
                setError("Error al buscar publicación");
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, [id]);

    return { datos, cargando, error };
};

const useUltimasPublicaciones = () => {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/publicacion/last`);
                setDatos(response.data);
            } catch (error) {
                console.error("Error al buscar publicación: " + error);
                setError("Error al buscar publicación");
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, []);

    return { datos, cargando, error };
}

const GetUsuario = (id) => {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${id}`);
                console.log(response.data);
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al buscar usuario: " + error);
                setError("Error al buscar publicacion " + error)
            } finally {
                setCargando(false);
            }
        };

        fetchData();
    }, [id]);
    
    return { usuario, cargando, error };
}


export { usePublicacion, useUltimasPublicaciones, GetUsuario, GetAllPublicaciones };