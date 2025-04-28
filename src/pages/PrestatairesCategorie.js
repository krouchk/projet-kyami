import React from "react";
import { Link } from "react-router-dom";

function PrestatairesCategorie() {
  const prestataires = [
    {
      nom: "Chef Gourmand",
      categorie: "Traiteur",
      description: "Buffets et repas gastronomiques.",
    },
    {
      nom: "Saveurs Festives",
      categorie: "Traiteur",
      description: "Menus sur mesure pour vos réceptions.",
    },
    {
      nom: "Key Events",
      categorie: "Traiteur",
      description: "Key Events organise vos événements avec élégance, créativité et professionnalisme.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-gold mb-4">Prestataires pour : Traiteur</h2>
      <div className="row">
        {prestataires.map((presta, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-gold">{presta.nom}</h5>
                <p className="card-text">{presta.description}</p>
                <Link
                  to={`/reservations?prestataire=${encodeURIComponent(presta.nom)}`}
                  className="btn btn-primary"
                >
                  Contacter
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrestatairesCategorie;
