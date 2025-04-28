import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Prestations from "./pages/Prestations";
import PrestatairesCategorie from "./pages/PrestatairesCategorie";
import ProfilPrestataire from "./pages/ProfilPrestataire";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import LoginPrestataire from "./pages/LoginPrestataire";
import InscriptionPrestataire from "./pages/InscriptionPrestataire";
import DashboardPrestataire from "./pages/DashboardPrestataire";
import GestionDisponibilites from "./pages/GestionDisponibilites";
import DemandesRecues from "./pages/DemandesRecues";

function App() {
  return (
    <AuthProvider>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Router>
          <Header />
          <div style={{ flex: "1" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prestations" element={<Prestations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/todo" element={<PrivateRoute><Todo /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/edit-profile" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
              <Route path="/prestataires/:categorie" element={<PrestatairesCategorie />} />
              <Route path="/prestataire/key-events" element={<ProfilPrestataire />} />
              <Route path="/reservation/:prestataire" element={<Reservations />} />
              <Route path="/login-prestataire" element={<LoginPrestataire />} />
              <Route path="/register-prestataire" element={<InscriptionPrestataire />} />
              <Route path="/dashboard-prestataire" element={<DashboardPrestataire />} />
              <Route path="/gestion-disponibilites" element={<GestionDisponibilites />} />
              <Route path="/demandes-reçues" element={<DemandesRecues />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}


export default App;
