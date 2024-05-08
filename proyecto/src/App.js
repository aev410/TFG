import Map from "./components/google-map/map";
import Autofill from "./components/google-map/menus/autofillMaps";
function App() {
  return (
    <div className="App">
      <Map Menu={Autofill}></Map>
    </div>
  );
}

export default App;
