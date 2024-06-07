import React from "react";
import { usePublicacion } from "../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import Map from "../google-map/map";
import { useParams } from "react-router-dom";

const PaginaPub = () => {
    const {idPub} = useParams()

    const { datos, cargando, error } = usePublicacion(idPub);

    if (cargando) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!datos) {
        return <p>No hay datos disponibles.</p>;
    }
    
    let imagenes = datos[0].imagenes.length > 1  ? datos[0].imagenes.split(";").filter(src => src) : datos[0].imagenes;
    console.log(imagenes)

    // Format the date to a more readable format
    const formatDate = (fecha) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(fecha).toLocaleDateString('es-ES', options);
    };

    return (
        <Container fluid className="bg-light py-3">
            <Row>
                <Col md={8}>
                    {imagenes.length > 0 ? (
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
                    ) : (
                        <p>No hay imágenes para mostrar.</p>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{datos[0].nombre}</Card.Title>
                            <Card.Text>
                                Precio: {datos[0].precio}€
                            </Card.Text>
                            <Card.Text>
                                Descripción: {datos[0].descripcion}
                            </Card.Text>
                            <Card.Text>
                                Fecha de publicación: {formatDate(datos[0].fecha_pub)}
                            </Card.Text>
                            {/* Here you can add a map or location component */}
                            <Card.Text>
                                <Map latP={parseFloat(datos[0].latitud)} lonP={parseFloat(datos[0].longitud)} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaginaPub;
