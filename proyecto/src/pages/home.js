import Map from '../components/google-map/map'
import Places from '../components/google-map/places'
import VistaPub from '../components/vistaPublicacion/vistaPub'
import {useUltimasPublicaciones} from '../services/api'
import "./home.css"


const UltimasPublicaciones = () =>{
    const { datos, cargando, error } = useUltimasPublicaciones()
    
    if (cargando) {
        return <p className='loading'>Cargando...</p>;
    }
    
    if (error) {
        return <p className='error'>{error}</p>;
    }
    
    if (!datos || datos.lenght === 0) {
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
        <div>
            <Map Menu={Places}></Map>
            <UltimasPublicaciones />
        </div>
    )
}

export default Home