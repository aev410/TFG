import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Nav from "./components/nav/nav";
import Footer2 from "./components/footer2/footer2";
import Footer from "./components/footer/footer";
import LoginPage from "./pages/login";
import Register from "./components/Sessions/register";
import Contact from "./components/contact/contact";
import VistaUser from "./components/vistaUsuario/VistaUser";
import UploadItem from "./components/nuevPub/UploadItem";
import PaginaPub from "./components/vistaPublicacion/paginaPub";
import Home from "./pages/home";
import './App.css';
import RegistrarTienda from "./components/registrarTienda/registrarTienda";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<><LoginPage/></>}/>
        <Route path="/register"  element={<><Register/></>}/>
        <Route path="/user" element={<><VistaUser/></>}/>
        <Route path="/register/tienda" element={<>  </>}/>
        <Route path="/user/tienda" element={<>  </>}/>
        <Route path="/newPub" element={<><UploadItem/></>}/>
        <Route path="/publics" element={<>  </>}/>
        <Route path="/publics/:idPub" element={<><PaginaPub id={useParams()}/></>}/>
      </Routes>
    </Router>
  );
}

function LayoutRoute({ children }) {
  const path = window.location.pathname;
  if (path === '/login' || path === '/register' || path === '/contact') {
    return children;
  } else {
    return (
      <>
        <Nav />
        {children}
        <Footer2 />
        <Footer />
      </>
    );
  }
}

function LoginRoute({ children }) {
  return (
    <>
      {children}
    </>
  );
}

export default App;
