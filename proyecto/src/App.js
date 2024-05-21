// import Home from "./pages/home"
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
        <Route path="/"  element={<><LoginPage/></>}/>
        <Route path="/register"  element={<><Register/></>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
