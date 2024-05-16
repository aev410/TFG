import React from "react";

const Places = ({setOffice}) => {
    const handleSelect = (value) => {
        const {lat, lng} = value;
        setOffice({lat, lng});
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <label>
                Alboloduy
                <input
                    type="radio"
                    value="alboloduy"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37.033, lng: -2.621 })}
                />
            </label>
            <label>
                Alcolea
                <input
                    type="radio"
                    value="alcolea"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 38.0, lng: -3.0 })}
                />
            </label>
            <label>
                Alhabia
                <input
                    type="radio"
                    value="alhabia"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.98, lng: -2.58 })}
                />
            </label>
            <label>
                Alhalma de Almeria
                <input
                    type="radio"
                    value="alhalma-almeria"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.95, lng: -2.56 })}
                />
            </label>
            <label>
                Alicún
                <input
                    type="radio"
                    value="alicun"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.966, lng: -2.6 })}
                />
            </label>
            <label>
                Almócita
                <input
                    type="radio"
                    value="almocita"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37, lng: -2.783 })}
                />
            </label>
            <label>
                Alsodux
                <input
                    type="radio"
                    value="alsodux"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37, lng: -2.58 })}
                />
            </label>
            <label>
                Bayárcal
                <input
                    type="radio"
                    value="bayarcal"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37.033, lng: -2.983 })}
                />
            </label>
            <label>
                Beires
                <input
                    type="radio"
                    value="beires"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37.016, lng: -2.783 })}
                />
            </label>
            <label>
                Bentarique
                <input
                    type="radio"
                    value="bentarique"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.616 })}
                />
            </label>
            <label>
                Canjáyar
                <input
                    type="radio"
                    value="canjayar"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37, lng: -2.73 })}
                />
            </label>
            <label>
                Fondón
                <input
                    type="radio"
                    value="fondon"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.85 })}
                />
            </label>
            <label>
                Huécija
                <input
                    type="radio"
                    value="huecija"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.966, lng: -2.6 })}
                />
            </label>
            <label>
                Íllar
                <input
                    type="radio"
                    value="illar"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.63 })}
                />
            </label>
            <label>
                Instinción
                <input
                    type="radio"
                    value="instincion"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.65 })}
                />
            </label>
            <label>
                Laujar de Andarax
                <input
                    type="radio"
                    value="laujar-andarax"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.883 })}
                />
            </label>
            <label>
                Ohanes
                <input
                    type="radio"
                    value="ohanes"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37.03, lng: -2.73 })}
                />
            </label>
            <label>
                Padules
                <input
                    type="radio"
                    value="padules"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.997, lng: -2.773 })}
                />
            </label>
            <label>
                Paterna del Río
                <input
                    type="radio"
                    value="paterna-rio"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37.016, lng: -2.95 })}
                />
            </label>
            <label>
                Rágol
                <input
                    type="radio"
                    value="ragol"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.66 })}
                />
            </label>
            <label>
                Santa Cruz de Marchena
                <input
                    type="radio"
                    value="santa-cruz-marchena"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 37.016, lng: -2.6 })}
                />
            </label>
            <label>
                Terque
                <input
                    type="radio"
                    value="terque"
                    name="municipio"
                    onChange={() => handleSelect({ lat: 36.983, lng: -2.583 })}
                />
            </label>
        </div>
    )
}

export default Places;