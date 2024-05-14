import React, { useState, useMemo, useCallback, useRef } from "react";
import { useLoadScript, GoogleMap, Marker, Circle, MarkerClusterer } from "@react-google-maps/api";
import "./map.css";

const generateHouses = (position) => {
    const _houses = [];
    for (let i = 0; i < 100; i++) {
        const direction = Math.random() < 0.5 ? -2 : 2;
        _houses.push({
            lat: position.lat + Math.random() / direction,
            lng: position.lng + Math.random() / direction
        })
    }
    return _houses;
}

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

const Map = ({ Menu }) => {
    const [office, setOffice] = useState();
    const mapRef = useRef();
    const center = useMemo(() => ({ lat: 37.033002717899535, lng: -2.6214881335802667 }), []);
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false
    }), []);
    const onLoad = useCallback(Map => (mapRef.current = Map), [])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBE2cF2mYtxB3H_LMxgpf_CxeBTjtfl3o4",
        libraries: ["places"]
    });

    const houses = useMemo(() => generateHouses(center), [center]);

    if (!isLoaded) {
        return <div>Loading...</div>
    }
    return (
        <div className="container">
            <div className="controls">
                <h1>Mapa</h1>
                <Menu setOffice={(position) => {
                    setOffice(position);
                    mapRef.current?.panTo(position)
                }} ></Menu>
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
                            <MarkerClusterer>
                                {(clusterer) => houses.map(house => <Marker key={house.lat} position={house} clusterer={clusterer} />)}
                            </MarkerClusterer>
                            <Circle center={office} radius={1000} options={closeOptions} />
                        </>
                    )}
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map;