import './App.css';
import LandingPage from './pages/landing/Landing';
import { Routes, Route } from "react-router-dom";
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
