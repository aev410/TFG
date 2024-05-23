import usePublicacion from "../../services/api";
import "./vistaPub.css"

const VistaPub = ({ id }) => {
  const { datos, cargando, error } = usePublicacion(id)
  console.log(datos)
  const imagenesArray = datos[0].imagenes.split(";")

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
        <img src={imagenesArray[0]} alt="Imagen de la publicación" />
        <h3>{datos[0].nombre}</h3>
        <p>Precio: {datos[0].precio}</p>
        <p>Fecha de publicación: {new Date(datos[0].fecha_pub).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default VistaPub;
