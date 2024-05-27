import axios from 'axios';
import { useState, useEffect } from 'react';

export const usePublicacion = (id) => {
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

export const useUltimasPublicaciones = () => {
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


