import React, { useState } from "react";

function GestionDisponibilites() {
  const [disponibilites, setDisponibilites] = useState([]);

  const ajouterDisponibilite = () => {
    setDisponibilites([...disponibilites, { date: "", heure: "" }]);
  };

  const handleChange = (index, field, value) => {
    const newDisponibilites = [...disponibilites];
    newDisponibilites[index][field] = value;
    setDisponibilites(newDisponibilites);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Disponibilités enregistrées :", disponibilites);
    alert("Disponibilités enregistrées !");
    // Ici plus tard ➔ envoi vers PHP / MySQL si tu veux sauvegarder en base
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-gold mb-4">Mes Disponibilités</h2>

      <form onSubmit={handleSubmit}>
        {disponibilites.map((dispo, index) => (
          <div key={index} className="mb-3 row">
            <div className="col">
              <input
                type="date"
                className="form-control"
                value={dispo.date}
                onChange={(e) => handleChange(index, "date", e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="time"
                className="form-control"
                value={dispo.heure}
                onChange={(e) => handleChange(index, "heure", e.target.value)}
                required
              />
            </div>
          </div>
        ))}

        <div className="text-center mb-3">
          <button type="button" className="btn btn-secondary" onClick={ajouterDisponibilite}>
            Ajouter un créneau
          </button>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default GestionDisponibilites;
