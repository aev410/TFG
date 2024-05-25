import Map from '../components/google-map/map'
import Places from '../components/google-map/places'
import VistaPub from '../components/vistaPublicacion/vistaPub'


const Home = () => {
    return(
        <>
            <Map Menu={Places}></Map>
            <VistaPub id={5}></VistaPub>
        </>
    )
}

export default Home