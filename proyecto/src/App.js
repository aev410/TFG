// import Home from "./pages/home"
import Nav from "./components/nav/nav"
import Footer2 from "./components/footer2/footer2"
import Footer from "./components/footer/footer"
import LoginPage from "./pages/login";
import Register from "./components/Sessions/register";
import Contact from "./components/contact/contact";
import VistaUser from "./components/vistaUsuario/VistaUser";
import UploadItem from"./components/nuevPub/UploadItem";
import PaginaPub from "./components/vistaPublicacion/paginaPub";
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';


import './App.css';

function App() {

  return (
    <Router>
      <Nav />
      <Link to="/newPub">Go to Publicacion Page</Link>
      <Link to="/publics/21">Go to existing publicacion</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<><LoginPage/></>}/>
        <Route path="/register"  element={<><Register/></>}/>
        <Route path="/contact"  element={<><Contact/></>}/>
        <Route path="/user" element={<><VistaUser/></>}/>
        <Route path="/register/tienda" element={<>  </>}/>
        <Route path="/user/tienda" element={<>  </>}/>
        <Route path="/newPub" element={<><UploadItem/></>}/>
        <Route path="/publics" element={<>  </>}/>
        <Route path="/publics/:idPub" element={<><PaginaPub id={useParams()}/></>}/>
      </Routes>
      <Footer2 /> {/*para dispositivos moviles */}
      <Footer />
    </Router>

  );
}

export default App;
