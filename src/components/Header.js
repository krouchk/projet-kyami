import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const prestataire = localStorage.getItem("prestataireConnected");

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Kyami</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            {/* Navbar normale quand aucun prestataire */}
            {!prestataire && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/prestations">Prestations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/reservations">Réservations</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </>
            )}

            {/* Si prestataire connecté */}
            {prestataire ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard-prestataire">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={() => {
                    localStorage.removeItem("prestataireConnected");
                    window.location.href = "/login-prestataire";
                  }}>
                    Déconnexion
                  </button>
                </li>
              </>
            ) : (
              // Sinon on gère l'utilisateur (client)
              <>
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/todo">ToDoList</Link>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-link nav-link" onClick={logout}>
                        Déconnexion
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Connexion</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">Inscription</Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
