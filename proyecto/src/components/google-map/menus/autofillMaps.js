import React from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css"

const Autofill = ({setOffice}) => {
    //define todas estas variables mediante la libreria, y con la libreria indicamos que la busqueda esta limitada a España y solo se actualiza cuando el usuario deja de escribir
    const {ready, value, setValue, suggestions: {status, data}, clearSuggestions} =
        usePlacesAutocomplete({
            requestOptions: {
                componentRestrictions: {
                    country: "es",
                },
            },
            debounce: 300,
        })
    
    //Esta funcion ocurre cuando el usuario selecciona una opcion
    const handleSelect = async (val) => {
        // Guarda el input en val, false indica que este cambio no debe mostrar mas sugerencias, y clear limpia las ya existentes
        setValue(val, false)
        clearSuggestions()
        // Toma la informacion mediante el metodo getGeocode, usando val como su parametro
        const results = await getGeocode({address: val})
        //Aqui extrae la latitud y longitud mediante otra funcion y las guarda en lat y lng
        const {lat, lng} = await getLatLng(results[0])
        //Les da las variables al setOffice del map.js
        setOffice({lat, lng})
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput value={value} onChange={e => setValue(e.target.value)}
            className="combobox-input"
            disabled={!ready}
            placeholder="Buscar ubicacion..."/>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({place_id, description}) => 
                    <ComboboxOption key={place_id} value={description}/>)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export default Autofill;