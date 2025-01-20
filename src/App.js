import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Skills from "./Components/Skills/Skills.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader.js";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      )}
    </div>
  );
}

export default App;
