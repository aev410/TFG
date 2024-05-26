import usePublicacion from "../../services/api";
import "./vistaPub.css";

const VistaPub = ({ id }) => {
  const { datos, cargando, error } = usePublicacion(id);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!datos || datos.length === 0) {
    return <p>No hay datos disponibles.</p>;
  }

  const imagenesArray = datos[0].imagenes.split(";");

  return (
    <div className='tarjeta'>
      <div>
        <img src={imagenesArray[0]} alt="Imagen de la publicación" />
        <h3>{datos[0].nombre}</h3>
        <p>Precio: {datos[0].precio}</p>
        <p>Fecha de publicación: {new Date(datos[0].fecha_pub).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default VistaPub;
