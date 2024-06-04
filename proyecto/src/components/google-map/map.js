import React, { useState, useMemo, useCallback, useRef } from "react";
import { useJsApiLoader, GoogleMap, Marker, Circle, InfoWindow } from "@react-google-maps/api";
import "./map.css";
import { GetAllPublicaciones } from "../../services/api";
import VistaPub from "../vistaPublicacion/vistaPub";

/*Opciones para el mapa y el circulo que aparece cuando buscamos una zona en especifico
respectivamente*/

const defaultOptions = {
    strokeCapacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true
}

const closeOptions = {
    ...defaultOptions,
    zIndex: 3,
    fillOpacity: 0.05,
    strokeColor: "#8BC34A",
    fillCollor: "#8BC34A"
}

const librariesConst = ["places"]

/*Contiene dos props, menu es el tipo de interfaz que aparece en el rectangulo negro
Siendo autofillMaps una barra de busqueda y places checkboxes con provincias*/

const Map = ({ Menu, setLat, setLon, latP, lonP }) => {
    const [office, setOffice] = useState();
    const [selectedPubId, setSelectedPubId] = useState(null); // State for selected publication ID
    const [selectedPosition, setSelectedPosition] = useState(null); // State for selected marker position
    //Esto guarda una referencia como objeto de una instancia de google maps, permitiendole al componente trabajar con la api
    const mapRef = useRef();

    const center = useMemo(() => {
        if (!latP || !lonP) {
            return { lat: 37.033002717899535, lng: -2.6214881335802667 };
        } else {
            return { lat: latP, lng: lonP };
        }
    }, [latP, lonP]);

    //Aplica las opciones
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false
    }), []);
    //Esto llama una callback cuando se carga una instancia de google maps, que guarda la instancia en mapRef.current
    const onLoad = useCallback(Map => (mapRef.current = Map), [])

    //API de google
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyBE2cF2mYtxB3H_LMxgpf_CxeBTjtfl3o4",
        libraries: librariesConst
    });

    const { datos, error } = GetAllPublicaciones();

    if (error) {
        return <p>{error}</p>;
    }

    //Si no ha cargado muestra esto
    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="controls">
                <h1>Mapa</h1>
                {Menu ? (
                    <Menu setOffice={(position) => {
                        setOffice(position); //setOffice aplica las coordenadas pasadas
                        mapRef.current?.panTo(position) //panea a la zona
                        //Este codigo permite que los props set sean opcionales, si no introduces nada, o los dejas nulls no te saltara un error
                        if (typeof setLat === 'undefined' && typeof setLon === 'undefined') {
                            console.log("Operando sin guardar coordenadas")
                        } else {
                            console.log("Guardando coordenadas")
                            setLat(position.lat)
                            setLon(position.lng)
                        }
                    }} />
                ) : (
                    null
                )}
            </div>
            <div className="map">
                <GoogleMap zoom={17} center={center}
                    mapContainerClassName="map-container"
                    options={options}

                    onLoad={onLoad}>
                    {office && (
                        <>
                            <Marker position={office}>
                                center.lat, center.lng
                            </Marker>
                            <Circle center={office} radius={300} options={closeOptions} />
                        </>
                    )}
                    {datos && datos.map((dato, index) => (
                        <Marker
                            key={index}
                            position={{ lat: parseFloat(dato.latitud), lng: parseFloat(dato.longitud) }}
                            onClick={() => {
                                console.log("Marcador clickeado: ", dato.idpublicacion)
                                setSelectedPubId(dato.idpublicacion); // Set the selected publication ID on click
                                setSelectedPosition({ lat: parseFloat(dato.latitud), lng: parseFloat(dato.longitud) }); // Set the selected marker position on click
                            }}
                        />
                    ))}

                    {selectedPubId && selectedPosition && (
                        <InfoWindow
                            position={selectedPosition}
                            onCloseClick={() => {
                                setSelectedPubId(null);
                                setSelectedPosition(null);
                            }}
                        >
                            <div style={{ maxWidth: "200px" }}>
                                <VistaPub id={selectedPubId}/>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;