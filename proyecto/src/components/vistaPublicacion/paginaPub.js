import React from "react";
import { usePublicacion } from "../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';

const PaginaPub = ({ id }) => {
    const { datos, cargando, error } = usePublicacion(id);

    if (cargando) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!datos) {
        return <p>No hay datos disponibles.</p>;
    }

    let imagenes = datos.imagenes ? datos.imagenes.split(";").filter(src => src) : [];

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
                                        src={src}
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
                            <Card.Title>{datos.nombre}</Card.Title>
                            <Card.Text>
                                Precio: {datos.precio}€
                            </Card.Text>
                            <Card.Text>
                                Descripción: {datos.descripcion}
                            </Card.Text>
                            <Card.Text>
                                Fecha de publicación: {formatDate(datos.fecha_pub)}
                            </Card.Text>
                            {/* Here you can add a map or location component */}
                            <Card.Text>
                                Ubicación: Latitud {datos.latitud}, Longitud {datos.longitud}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaginaPub;
