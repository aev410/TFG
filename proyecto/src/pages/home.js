import Map from '../components/google-map/map'
import Places from '../components/google-map/places'
import VistaPub from '../components/vistaPublicacion/vistaPub'
import {useUltimasPublicaciones} from '../services/api'


const UltimasPublicaciones = () =>{
    const { datos, cargando, error } = useUltimasPublicaciones()
    
    if (cargando) {
        return <p>Cargando...</p>;
    }
    
    if (error) {
        return <p>{error}</p>;
    }
    
    if (!datos) {
        return null;
    }

    return(
        <>
        <VistaPub id={datos[0].ididpublicacion}></VistaPub>
        <VistaPub id={datos[1].ididpublicacion}></VistaPub>
        <VistaPub id={datos[2].ididpublicacion}></VistaPub>
        </>
        
    )
}

const Home = () => {
    return(
        <>
            <Map Menu={Places}></Map>
            <UltimasPublicaciones />
        </>
    )
}

export default Home