import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardPrestataire() {
  const navigate = useNavigate();
  const [prestataire, setPrestataire] = useState(null);

  useEffect(() => {
    const storedPrestataire = localStorage.getItem("prestataireConnected");

    if (storedPrestataire) {
      setPrestataire(JSON.parse(storedPrestataire));
    } else {
      navigate("/login-prestataire"); // Redirige si pas connecté
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("prestataireConnected");
    navigate("/login-prestataire");
  };

  if (!prestataire) {
    return <div className="text-center my-5">Chargement...</div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center text-gold mb-4">Bienvenue, {prestataire.prenom} !</h1>

      <div className="card prestation-card p-4">
        <h4 className="mb-3">Votre Profil</h4>
        <ul>
          <li><strong>Nom :</strong> {prestataire.nom}</li>
          <li><strong>Email :</strong> {prestataire.email}</li>
          <li><strong>Téléphone :</strong> {prestataire.telephone}</li>
          <li><strong>Localisation :</strong> {prestataire.localisation}</li>
          <li><strong>Catégorie :</strong> {prestataire.categorie}</li>
        </ul>

        <div className="mt-4">
          <h4>Gérer mes disponibilités</h4>
            <button className="btn btn-primary" onClick={() => navigate("/gestion-disponibilites")}>Gérer mes créneaux</button>
    </div>

        <div className="mt-4">
          <h4>Consulter mes demandes reçues</h4>
            <button className="btn btn-primary" onClick={() => navigate("/demandes-reçues")}>Voir mes demandes</button>
    </div>


        <div className="mt-4">
          <h4>Vos Réservations</h4>
          <p>La liste de vos réservations apparaîtra ici bientôt ✨.</p>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-danger" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardPrestataire;
