import axios from 'axios';
import { useState, useEffect } from 'react';
import "./vistaPub.css"

const VistaPub = ({ id }) => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/publicacion/' + id)
      .then(function (response) {
        console.log(response.data);
        setDatos(response.data);
      })
      .catch(function (error) {
        console.error("Error al buscar publicacion: " + error);
      });
  }, [id]);

  return (
    <div className='tarjeta'>
    {datos ? (
        <div>
          <img src={datos[0].imagenes} alt="Imagen de la publicación" />
          <h3>{datos[0].nombre}</h3>
          <p>Precio: {datos[0].precio}</p>
          <p>Fecha de publicación: {new Date(datos[0].fecha_pub).toLocaleDateString()}</p>
        </div>
    ) : 'Cargando...'}
    </div>
  );
}

export default VistaPub;
