import './App.css';
import LandingPage from './pages/landing/Landing.jsx';
import { Routes, Route } from "react-router-dom";
import BuyNow from './pages/buynow.jsx';
import SellNow from './pages/sellnow.jsx';
import Login from './pages/login/login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Sellerdashboard from './pages/dashboard/Sellerdashboard.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      {/* <Route path='/about-us' element={<AboutUs />} /> */}
      <Route path="/buyNow" element={<BuyNow />} />
      <Route path="/sellNow" element={<SellNow />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Sellerdashboard' element={<Sellerdashboard />} />
      <Route path='/sellNow/Sellerdashboard' element={<Sellerdashboard />} />
    </Routes>
  );


  }



  export default App;

