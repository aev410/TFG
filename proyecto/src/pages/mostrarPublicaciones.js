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
        <div className="container-fluid" id="all-publicaciones">
            <div className="d-flex justify-content-center">
                <div className="card" id="publicaciones-card">
                    <div className="card-body">
                        <div className="card-title" style={{ fontSize: "3rem", fontWeight: "bold", borderBottom: "1px solid var(--color1)" }}>Publicaciones</div>
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