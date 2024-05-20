import Map from "./components/google-map/map"
import Places from "./components/google-map/places"
function App() {
  return (
    <div className="App">
      <Map Menu={Places}></Map>
    </div>
  );
}

export default App;
