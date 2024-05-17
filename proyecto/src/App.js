import Map from "./components/google-map/map"
import Nav from "./components/nav/nav"
import './App.css'

function App() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Nav/>
        </div>
      </div>
      <div className="row">

        {/* <Map/> */}
      </div>
    </div>
  );
}

export default App;
