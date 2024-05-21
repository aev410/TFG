// import Home from "./pages/home"
import LoginPage from "./pages/login";
import Register from "./components/Sessions/register";
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/"  element={<><LoginPage/></>}/>
        <Route path="/contacto"  element={<><Register/></>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
