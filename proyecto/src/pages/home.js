import Map from '../components/google-map/map'
import Places from '../components/google-map/places'



const Home = () => {
    return(
        <>
            <Map Menu={Places}></Map>
        </>
    )
}

export default Home