import usePublicacion from "../../services/api";
import "./vistaPub.css"

const VistaPub = ({ id }) => {
  const { datos, cargando, error } = usePublicacion(id)

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!datos) {
    return null;
  }

  return (
    <div className='tarjeta'>
      <div>
        <img src={datos[0].imagenes} alt="Imagen de la publicación" />
        <h3>{datos[0].nombre}</h3>
        <p>Precio: {datos[0].precio}</p>
        <p>Fecha de publicación: {new Date(datos[0].fecha_pub).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default VistaPub;
