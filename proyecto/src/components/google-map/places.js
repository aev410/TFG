import React from "react";
import pueblos from "./pueblos.json"

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
        {pueblos.map((pueblo, index) => (
        <label key={index}>
            {pueblo.name}
            <input
                type="radio"
                value={pueblo.name}
                name="municipio"
                onChange={() => handleSelect({ lat: pueblo.lat, lng: pueblo.lng })}
            />
        </label>
        ))}
        </div>
    )
}

export default Places;