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
    console.log(datos);
    return(
        <>
        <VistaPub id={datos[0].idpublicacion}></VistaPub>
        <VistaPub id={datos[1].idpublicacion}></VistaPub>
        <VistaPub id={datos[2].idpublicacion}></VistaPub>
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