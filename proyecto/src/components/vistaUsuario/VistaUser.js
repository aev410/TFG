import React from "react";
import { GetUsuario } from "../../services/api";
import VistaPub from "../vistaPublicacion/vistaPub";
import 'bootstrap/dist/css/bootstrap.min.css';
import './vista.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { setCookie } from "../../services/cookies";

const VistaUser = () => {
    //Aqui guardo el resultado de la busqueda, dividido segun las tablas, 4 seria el ID
    const { usuario, cargando, error } = GetUsuario();

    if (cargando) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!usuario.userData) {
        return <p>No hay datos disponibles.</p>;
    }

    const { userData, storeData, publicacionData } = usuario;

    if (storeData) {
        setCookie('IdTienda', storeData.idtienda, 1)
    }



    //Este codigo esta usando la libreria de bootstrap con React, los nombres de los componentes se transportan a las clases de bootstrap
    return (
        < Container fluid className = "py-3" id = "user-root" >
            <Card className="mb-custom" id="tarjeta-user">
                <Card.Body>
                    {/* Esta es la carta que muestra la info del usuario y parcialmente la de la tienda, si existe esta, tiene los items en el centro y a cada esquina */}
                    <Row className="align-items-center">
                        <Col className="text-start " id="user-Name font-weight-bold">
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
                                        <strong>Email: {userData.correo}</strong>
                                    </p>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    {
        storeData ? (
            <Card className="p-3" id="tienda-usuario">
                {/* Aqui es la carta de las publicaciones del usuario, p-3 es el padding arriba, de resto se encarga de mostrar el array de publicaciones si existe */}
                <h2>Publicaciones de la tienda {storeData.nombretienda}:</h2>
                {publicacionData ? (
                    <Row>
                        {/* Esto es como un foreach y organizo las tarjetas con md de bootstrapt, le estoy basicamente diciendo que ocupen 5 columnas pero que si es la primera
                                se salte una, para la uniformidad */}
                        {publicacionData.map((pub, i) => (
                            <Col md={{ span: 5, offset: i % 2 === 0 ? 1 : 0 }} key={i} className="d-flex">
                                {/* Aqui mostramos las publicaciones, con estilo de carta Bootstrap*/}
                                <VistaPub id={pub.idpublicacion} className="card h-100" />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <p>No hay publicaciones disponibles.</p>
                )}
            </Card>
        ) : (
            <Card className="p-3" id="tienda-usuario" style={{textAlign: "center", justifyContent: "center"}}>
                <Link to={'/register/tienda'}>
                <h2>Este usuario no tiene una tienda registrada</h2>
                <p>Click para crear</p>
                </Link>
            </Card>
        )
    }


        </Container >
    );
};

export default VistaUser;
