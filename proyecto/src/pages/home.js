import Map from '../components/google-map/map'
import Places from '../components/google-map/places'
import VistaPub from '../components/vistaPublicacion/vistaPub'
import { useUltimasPublicaciones } from '../services/api'
import "./home.css"

const Home = () => {
    const { datos, cargando, error } = useUltimasPublicaciones()
    console.log("ultimas pub", datos);

    if (cargando) {
        return <p className='loading'>Cargando...</p>;
    }

    if (error) {
        return <p className='error'>{error}</p>;
    }

    if (!datos || datos.length === 0) {
        return null;
    }

    return (
        <div className="container-fluid" id="home-div">
            <div className="row align-items-center" style={{height: "80vh"}}>
                <div className="col" id="map-home-column">
                    <Map Menu={Places} idCss={"home-map"}></Map>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <div className="card" id="home-card">
                            <div className="card-body">
                                <div className="card-title" style={{fontSize: "3rem", fontWeight:"bold"}}>Ultimas publicaciones</div>
                                <div className="row">
                                    <div className="col-6 mb-2">
                                        <VistaPub id={datos[0].idpublicacion}></VistaPub>
                                    </div>
                                    <div className="col-6 mb-2">
                                        <VistaPub id={datos[1].idpublicacion}></VistaPub>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-2">
                                        <VistaPub id={datos[2].idpublicacion}></VistaPub>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
