<<<<<<< HEAD
import './App.css';
import LandingPage from './Pages/landing/Landing';
=======
// import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import LandingPage from "./pages/landing";
// import AboutUs importimport { RouterProvider } from "react-router-dom";
//  { createBrowserRouter } from "react-router-dom";
//  from "./pages/landing/aboutUs";

// import aboutUs from "./pages/aboutUs";
// import buyNow from "./pages/buyNow";
// import sellNow from "./pages/sellNow";
// import login from "./pages/login";
>>>>>>> feature/navbar

// const router = createBrowserRouter([{
//   path:"/", element: <AboutUs/>}
// ])
function App() {
  return (
<<<<<<< HEAD
    <>
      <LandingPage />
    </>
=======
   <>
      <NavBar />
      <LandingPage/>
      
         {/* <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/aboutUs" element={<aboutUs />} />
        <Route path="/buyNow" element={<buyNow />} />
        <Route path="/sellNow" element={<sellNow />} />
        <Route path="/login" element={<login />} /> 
      </Routes>   */}
      </>
>>>>>>> feature/navbar
  );
}

export default App;
