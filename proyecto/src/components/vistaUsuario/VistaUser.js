import React, { useState, useEffect } from "react";
import VistaPub from "../vistaPublicacion/vistaPub";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vista.css';
import { Container, Card, Row, Col } from 'react-bootstrap';

const VistaUser = () => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Starting data fetch...");
            try {
                const response = await axios.get('http://localhost:3000/user/4');
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al buscar publicación: " + error);
            }
        };

        fetchData();
    }, []);

    if (!usuario) {
        return (
            <Container>
                <p>Loading...</p>
            </Container>
        );
    }

    const { userData, storeData, publicacionData } = usuario;

    return (
        <Container fluid className="bg-light py-3" id="user-root">
            <Card className="mb-custom">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col className="text-start" id="user-Name">
                            <h2>{userData.nombre} {userData.apellido}</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-end" id="store-Info">
                            {storeData ? (
                                <div>
                                    <span>Email: {userData.correo}</span><br />
                                    <span>Telefono: {storeData.telefono}</span><br />
                                    <span>Direccion: {storeData.direccion}</span>
                                </div>
                            ) : (
                                <div>
                                    <p>
                                        Email: {userData.correo}
                                    </p>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {storeData && (
                <Card className="p-3">
                    <h2>Publicaciones de la tienda {storeData.nombretienda}:</h2>
                    {publicacionData ? (
                        <Row className="g-3">
                            <Col>
                                <VistaPub id={publicacionData.idpublicacion} />
                            </Col>
                        </Row>
                    ) : (
                        <p>No hay publicaciones disponibles.</p>
                    )}
                </Card>
            )}
        </Container>
    );
};

export default VistaUser;
