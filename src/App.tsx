import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import OurPeople from "./pages/OurPeople";

function App() {
  return (
    /** Dont forget to consider mobile and responsiveness */

    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurWork" element={<OurWork />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/OurPeople" element={<OurPeople />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
