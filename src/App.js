import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Ajout de la route Contact */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
