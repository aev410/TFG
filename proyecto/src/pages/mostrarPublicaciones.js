import VistaPub from '../components/vistaPublicacion/vistaPub'
import { GetAllPublicaciones } from '../services/api'
import './mostrarPublicaciones.css'

const MostrarPublicaciones = () => {
    const { datos, error } = GetAllPublicaciones()
    if (error) {
        return <p className='error'>{error}</p>;
    }

    if (!datos || datos.length === 0) {
        return null;
    }

    return (
        <div className="col">
            <div className="d-flex justify-content-center">
                <div className="card" id="home-card">
                    <div className="card-body">
                        <div className="card-title" style={{ fontSize: "3rem", fontWeight: "bold" }}>Publicaciones</div>
                        <div className="row">
                            {datos.map((publicacion, index) => (
                                <div className="col-3 mb-2" key={index}>
                                    <VistaPub id={publicacion.idpublicacion}></VistaPub>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostrarPublicaciones