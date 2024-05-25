// import Home from "./pages/home"
import Nav from "./components/nav/nav"
import Footer from "./components/footer/footer"


// import Map from "./components/google-map/map"

// import LoginPage from "./pages/login";
// import Register from "./components/Sessions/register";
// import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';


import LoginPage from "./pages/login";
import Register from "./components/Sessions/register";
import VistaUser from "./components/vistaUsuario/VistaUser";
import UploadItem from"./components/nuevPub/UploadItem"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import './App.css'

function App() {

  return (


    // <div>
    //     <Nav />
    //     <Map />
    //     <Footer />
    // </div>

    // <Router>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/login"  element={<><LoginPage/></>}/>
    //     <Route path="/register"  element={<><Register/></>}/>
    //   </Routes>
    //   <Footer />
    // </Router>


    <Router>
      <Nav />
      <Link to="/newPub"><button>prueba</button></Link>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/login"  element={<><LoginPage/></>}/>
        <Route path="/register"  element={<><Register/></>}/>
        <Route path="/user" element={<><VistaUser/></>}/>
        {/* <Route path="/register/tienda" element={<>  </>}/> */}
        {/* <Route path="/user/tienda" element={<>  </>}/> */}
        <Route path="/newPub" element={<><UploadItem/></>}/>
        {/* <Route path="/publics" element={<>  </>}/> */}
        {/* <Route path="/publics/idPub" element={<>  </>}/> */}
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
