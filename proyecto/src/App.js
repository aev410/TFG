// import Home from "./pages/home"
import Nav from "./components/nav/nav"
import Footer from "./components/footer/footer"

import Map from "./components/google-map/map"

// import LoginPage from "./pages/login";
// import Register from "./components/Sessions/register";
// import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';


import './App.css'

function App() {

  return (

    <div>
        <Nav />
        <Map />
        <Footer />
    </div>

    // <Router>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/login"  element={<><LoginPage/></>}/>
    //     <Route path="/register"  element={<><Register/></>}/>
    //   </Routes>
    //   <Footer />
    // </Router>

  );
}

export default App;
