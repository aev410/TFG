import React, { useState, useMemo, useCallback, useRef } from "react";
import { useLoadScript, GoogleMap, Marker, Circle } from "@react-google-maps/api";
import "./map.css";

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

/*Contiene dos props, menu es el tipo de interfaz que aparece en el rectangulo negro
Siendo autofillMaps una barra de busqueda y places checkboxes con provincias*/

const Map = ({ Menu, setLat, setLon }) => {
    const [office, setOffice] = useState();
    //La verdad no se que hace esto, no creo que haya necesidad de moverlo
    const mapRef = useRef();
    //Donde va a iniciar el mapa
    const center = useMemo(() => ({ lat: 37.033002717899535, lng: -2.6214881335802667 }), []);
    //Aplica las opciones
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false
    }), []);
    //Carga el mapa, creo
    const onLoad = useCallback(Map => (mapRef.current = Map), [])

    //API de google
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBE2cF2mYtxB3H_LMxgpf_CxeBTjtfl3o4",
        libraries: ["places"]
    });
    
    //Si no ha cargado muestra esto
    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="controls">
                <h1>Mapa</h1>
                
                <Menu setOffice={(position) => {
                    setOffice(position); //setOffice aplica las coordenadas pasadas
                    mapRef.current?.panTo(position) //panea a la zona
                    setLat(position.lat);
                    setLon(position.lng)
                }} />
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
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;