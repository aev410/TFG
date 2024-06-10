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
import MostrarPublicaciones from './pages/mostrarPublicaciones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutRoute><Home /></LayoutRoute>} />
        <Route path="/login" element={<LoginRoute><LoginPage /></LoginRoute>} />
        <Route path="/register" element={<LoginRoute><Register /></LoginRoute>} />
        <Route path="/contact" element={<LoginRoute><Contact /></LoginRoute>} />
        <Route path="/user" element={<LayoutRoute><VistaUser /></LayoutRoute>} />
        <Route path="/register/tienda" element={<LayoutRoute><RegistrarTienda/> </LayoutRoute>} />
        <Route path="/user/tienda" element={<> </>} />
        <Route path="/newPub" element={<LayoutRoute><UploadItem /></LayoutRoute>} />
        <Route path="/publics" element={<LayoutRoute> <MostrarPublicaciones/> </LayoutRoute>} />
        <Route path="/publics/:idPub" element={<LayoutRoute><PaginaPub id={useParams()} /></LayoutRoute>} />
      </Routes>
    </Router>

    //  <Nav></Nav> 

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