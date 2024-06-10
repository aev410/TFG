import React, { useState, useEffect, useCallback } from "react";
import { usePublicacion } from "../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Card } from 'react-bootstrap';
import Map from "../google-map/map";
import { useParams } from "react-router-dom";
import "./paginaPub.css";

const PaginaPub = () => {
    const [calle, setCalle] = useState("");
    const { idPub } = useParams();
    const { datos, cargando, error } = usePublicacion(idPub);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    const handleMapLoad = useCallback(() => {
        setIsMapLoaded(true);
    }, []);

    useEffect(() => {
        if (isMapLoaded && datos) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: { lat: parseFloat(datos[0].latitud), lng: parseFloat(datos[0].longitud) } }, (results, status) => {
                if (status === "OK") {
                    if (results[0]) {
                        setCalle(results[0].formatted_address);
                    } else {
                        console.log("No se encontraron resultados");
                    }
                } else {
                    console.log("La geocodificación falló debido a: " + status);
                }
            });
        }
    }, [isMapLoaded, datos]);

    if (cargando) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!datos) {
        return <p>No hay datos disponibles.</p>;
    }

    let imagenes = datos[0].imagenes.length > 1 ? datos[0].imagenes.split(";").filter(src => src) : [datos[0].imagenes];
    console.log(imagenes);

    const formatDate = (fecha) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(fecha).toLocaleDateString('es-ES', options);
    };

    return (
        <Container fluid className="py-3" id="publi-pag">
            <Card id="tarjeta-pag-pub">
                <Card.Body>
                    {imagenes.length > 0 ? (
                        <Carousel>
                            {imagenes.map((src, index) => (
                                <Carousel.Item key={index} id="img-pagina-pub">
                                    <img
                                        className="d-block w-100 img-fluid"
                                        src={`http://localhost:3000/images/${src}`}
                                        alt={`Imagen ${index + 1}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    ) : (
                        <p>No hay imágenes para mostrar.</p>
                    )}
                    <div className="border-pub">
                        <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                            {datos[0].precio}€
                        </Card.Text>
                        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{datos[0].nombre}</Card.Title>
                    </div>
                    <div className="border-pub">
                        <Card.Text>
                            Descripción: {datos[0].descripcion}
                        </Card.Text>
                    </div>
                    <div className="border-pub">
                        <Card.Text>
                            Fecha de publicación: {formatDate(datos[0].fecha_pub)}
                        </Card.Text>
                    </div>
                    <Card.Text style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}>
                        <p>Ubicacion: {calle}</p>
                        <Map latP={parseFloat(datos[0].latitud)} lonP={parseFloat(datos[0].longitud)} idCss={"pag-pub-map"} onLoadCallback={handleMapLoad} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PaginaPub;
