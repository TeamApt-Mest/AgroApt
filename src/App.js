import './App.css';

import LandingPage from './Pages/landing/Landing.jsx';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Pages/aboutUs.jsx';
import BuyNow from './Pages/buyNow.jsx';
import SellNow from './Pages/sellNow.jsx';
import Login from './Pages/login/login.jsx';
import Signup from './Pages/signup/Signup.jsx';
import Sellerdashboard from './Pages/dashboard/Sellerdashboard.jsx';



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
      <Route path='/Sellerdashboard' element={<Sellerdashboard/>}/>
      <Route path='/sellNow/Sellerdashboard' element={<Sellerdashboard/>}/>
    </Routes>

  );
}

export default App;

