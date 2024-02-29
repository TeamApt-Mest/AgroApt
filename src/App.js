import './App.css';
import LandingPage from './Pages/landing/landing.jsx';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Pages/aboutus.jsx';
import BuyNow from './Pages/buynow.jsx';
import SellNow from './Pages/sellnow.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/signup/Signup.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path="/buyNow" element={<BuyNow />} />
      <Route path="/sellNow" element={<SellNow />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>

  );
}

export default App;
