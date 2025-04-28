import React from "react";
import { Link } from "react-router-dom";

function ProfilPrestataire() {
  // Infos fixes pour Key Events / Kellyann
  const prestataire = {
    nomEntreprise: "Key Events",
    prenom: "Kellyann",
    telephone: "06 45 78 12 34",
    localisation: "Lyon",
    description:
      "Key Events organise vos événements avec élégance, créativité et professionnalisme pour rendre chaque moment inoubliable.",
    tranchePrix: "800€ – 2500€ selon la prestation",
    instagram: "@keyevents_lyon",
    facebook: "facebook.com/keyeventslyon",
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-gold mb-4">{prestataire.nomEntreprise}</h1>
      <div className="card prestation-card p-4">
        <h4 className="mb-3">Gérant : {prestataire.prenom}</h4>
        <p><strong>Localisation :</strong> {prestataire.localisation}</p>
        <p><strong>Téléphone :</strong> {prestataire.telephone}</p>
        <p><strong>Description :</strong> {prestataire.description}</p>
        <p><strong>Tranche de prix :</strong> {prestataire.tranchePrix}</p>
        <p><strong>Instagram :</strong> <a href={`https://instagram.com/${prestataire.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer">{prestataire.instagram}</a></p>
        <p><strong>Facebook :</strong> <a href={`https://${prestataire.facebook}`} target="_blank" rel="noopener noreferrer">{prestataire.facebook}</a></p>
        
        <div className="text-center mt-4">
        <Link to={`/reservation/key-events`} className="btn btn-gold">Demande de réservation</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilPrestataire;
