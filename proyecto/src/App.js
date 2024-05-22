import Home from "./pages/home"
import Nav from "./components/nav/nav"
import Footer from "./components/footer/footer"
import LoginPage from "./pages/login";
import Register from "./components/Sessions/register";
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<><LoginPage/></>}/>
        <Route path="/register"  element={<><Register/></>}/>
        {/* <Route path="/user" element={<>  </>}/> */}
        {/* <Route path="/register/tienda" element={<>  </>}/> */}
        {/* <Route path="/user/tienda" element={<>  </>}/> */}
        {/* <Route path="/newPub" element={<>  </>}/> */}
        {/* <Route path="/publics" element={<>  </>}/> */}
        {/* <Route path="/publics/idPub" element={<>  </>}/> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
