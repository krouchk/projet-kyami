import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Bienvenue sur votre espace personnel</h2>

      {user ? (
        <div className="text-center mb-5">
          <h4>Bonjour {user.prenom} {user.nom} 👋</h4>
          <p>Que souhaitez-vous faire aujourd'hui ?</p>
        </div>
      ) : (
        <div className="text-center">
          <p>Veuillez vous connecter pour accéder à votre espace personnel.</p>
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <Link to="/reservations" className="text-decoration-none">
            <div className="card shadow-sm text-center p-4 h-100">
              <h5 className="card-title mb-2">📅 Mes Réservations</h5>
              <p className="card-text">Voir et gérer vos réservations d'événements.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/todo" className="text-decoration-none">
            <div className="card shadow-sm text-center p-4 h-100">
              <h5 className="card-title mb-2">📝 Ma ToDo List</h5>
              <p className="card-text">Organisez vos tâches importantes pour vos événements.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-4 mb-4">
          <Link to="/profile" className="text-decoration-none">
            <div className="card shadow-sm text-center p-4 h-100">
              <h5 className="card-title mb-2">👤 Mon Profil</h5>
              <p className="card-text">Gérer mes informations personnelles.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
