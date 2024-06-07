import navigate from 'react'
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce'
import { deleteCookie } from './cookies';

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

//Esto impone un limite entre cada call
const GetPublicacionesXnombre = (nombre) => {
    const [datos, setDatos] = useState(null);
    const [error, setError] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = useCallback(debounce(async (nombre) => {
        try {
            const response = await axios.get(`http://localhost:3000/publicacion/nombre/${nombre}`);
            console.log("Publicación response:", response.data);
            setDatos(response.data);
        } catch (error) {
            console.error("Error al buscar publicación:", error);
            setError("Error al buscar publicación");
        }
    }, 300), []);

    useEffect(() => {
        if (nombre) {
            fetchData(nombre);
        }
        return () => {
            fetchData.cancel();
        };
    }, [nombre, fetchData]);

    return { datos, error };
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



const GetUsuario = () => {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');
    console.log("TOKEN DE LOCALSTORAGE PARA MANDAR: " + token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };
                const response = await axios.get(`http://localhost:3000/user`, config)
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
    }, [token]);

    return { usuario, cargando, error };
}

const cerrarSesion = () => {
    deleteCookie('UserEmail')
    localStorage.removeItem('authToken');
    navigate('/login')
}

export { usePublicacion, useUltimasPublicaciones, GetUsuario, GetAllPublicaciones, GetPublicacionesXnombre, cerrarSesion };