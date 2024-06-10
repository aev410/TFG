import { Link } from "react-router-dom";
import { usePublicacion } from "../../services/api";
import "./vistaPub.css"
import { Carousel } from 'react-bootstrap';

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

  let imagenes = datos[0].imagenes.length > 1  ? datos[0].imagenes.split(";").filter(src => src) : datos[0].imagenes;
  console.log(imagenes);
  
  let vinculo = `/publics/${id}`
  
  return (
    <Link to={vinculo}>
      <div className='tarjeta' id="default-width-tarjeta">
        <div>
          <Carousel>
            {imagenes.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={`http://localhost:3000/images/${src}`}
                  alt={`Imagen ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <h3>{datos[0].nombre}</h3>
          <p>Precio: {datos[0].precio}</p>
          <p>Fecha de publicación: {new Date(datos[0].fecha_pub).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default VistaPub;
