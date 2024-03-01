import './App.css';
import LandingPage from './Pages/landing/Landing.jsx';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Pages/aboutUs.jsx';
import BuyNow from './Pages/buyNow.jsx';
import SellNow from './Pages/sellNow.jsx';
import Login from './Pages/login/login.jsx';

import AboutUs from './Pages/aboutus.jsx';
import BuyNow from './Pages/buynow.jsx';
import SellNow from './Pages/sellnow.jsx';
import Login from './Pages/Login.jsx';
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


import AboutUs from './pages/aboutUs.jsx';
import BuyNow from './pages/buyNow.jsx';
import SellNow from './pages/sellNow.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signUp.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/buyNow" element={<BuyNow />} />
        <Route path="/sellNow" element={<SellNow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </>

  );
}



export default App;

