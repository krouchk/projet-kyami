import React, { useState, useEffect } from "react";

function ReservationForm() {
  const [prestataires, setPrestataires] = useState([]);
  const [selectedPrestataire, setSelectedPrestataire] = useState("");
  const [prestation, setPrestation] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");

  useEffect(() => {
    // Charger les prestataires disponibles (ex: depuis ton API ou en dur ici pour l'instant)
    setPrestataires(["Chef Gourmand", "Saveurs Festives", "Key Events"]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPrestataire || !prestation || !date || !heure) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    const data = {
      prestataire: selectedPrestataire,
      prestation,
      date,
      heure,
    };

    fetch("http://localhost/kyami-api/creerReservation.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          alert("Demande envoyée !");
          // Réinitialiser le formulaire
          setSelectedPrestataire("");
          setPrestation("");
          setDate("");
          setHeure("");
        } else {
          alert("Erreur : " + response.message);
        }
      })
      .catch(error => {
        console.error('Erreur serveur:', error);
        alert("Erreur serveur : " + error.message);
    });
    
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-gold mb-4">Faire une demande de réservation</h2>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedPrestataire}
            onChange={(e) => setSelectedPrestataire(e.target.value)}
          >
            <option value="">-- Sélectionner un prestataire --</option>
            {prestataires.map((presta, index) => (
              <option key={index} value={presta}>
                {presta}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nom de la prestation"
            value={prestation}
            onChange={(e) => setPrestation(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="time"
            className="form-control"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Faire une demande de réservation
        </button>
      </form>
    </div>
  );
}

export default ReservationForm;
