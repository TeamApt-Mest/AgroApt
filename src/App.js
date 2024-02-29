import './App.css';
import LandingPage from './Pages/landing/Landing';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Pages/aboutUs.jsx';
import BuyNow from './Pages/buyNow.jsx';
import SellNow from './Pages/sellNow.jsx';
import Login from './Pages/login.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path="/buyNow" element={<BuyNow />} />
      <Route path="/sellNow" element={<SellNow />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;
