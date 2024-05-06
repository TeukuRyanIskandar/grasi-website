import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurWork" element={<OurWork />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>      
    </BrowserRouter>
  );
}


export default App;
