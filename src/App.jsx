import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail.jsx";
import Navbar from "./pages/components/Navbar.jsx";
import Footer from "./pages/components/Footer.jsx";
import './index.css'
import './server.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
