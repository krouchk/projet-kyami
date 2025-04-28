import React from "react";
import { Link } from "react-router-dom";
import "./Prestations.css";

function Prestations() {
  const prestations = [
    {
      title: "DJ / Groupe de musique",
      description: "Animez vos événements avec les meilleurs artistes et DJs professionnels.",
    },
    {
      title: "Traiteur",
      description: "Savourez des plats raffinés et adaptés à tous vos types d'événements.",
    },
    {
      title: "Location de Salle",
      description: "Trouvez le lieu idéal pour réunir vos invités dans un cadre magique.",
    },
    {
      title: "Photographe / Vidéaste",
      description: "Immortalisez vos plus beaux souvenirs avec des professionnels expérimentés.",
    },
    {
      title: "Décorateur",
      description: "Sublimez votre événement avec des décorations élégantes et personnalisées.",
    },
    {
      title: "Animation",
      description: "Proposez des activités amusantes et interactives pour tous vos invités.",
    },
    {
      title: "Service de boissons / Barman",
      description: "Des cocktails créatifs et un service de boissons premium pour vos soirées.",
    },
    {
      title: "Location Matériel",
      description: "Louez tout le matériel nécessaire pour assurer le succès de votre événement.",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center text-gold mb-5">Nos Prestations</h1>
      <div className="row g-4">
        {prestations.map((prestation, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card prestation-card h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-gold">{prestation.title}</h5>
                  <p className="card-text">{prestation.description}</p>
                </div>
                <Link to={`/prestataires/${encodeURIComponent(prestation.title)}`} className="btn btn-gold mt-3">Voir les prestataires</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prestations;
