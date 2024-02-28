// import {  Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar.jsx";
import LandingPage from "./pages/landing";
// import aboutUs from "./pages/aboutUs";
// import buyNow from "./pages/buyNow";
// import sellNow from "./pages/sellNow";
// import login from "./pages/login";

function App() {
  return (
   <>
      <NavBar />
      <LandingPage/>
      {/* <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/aboutUs" element={<aboutUs />} />
        <Route path="/buyNow" element={<buyNow />} />
        <Route path="/sellNow" element={<sellNow />} />
        <Route path="/login" element={<login />} />
      </Routes> */}
      </>
  );
}

export default App;
