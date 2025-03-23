import React, { useState } from "react";

const ReservationForm = ({ onAddReservation }) => {
  const [prestation, setPrestation] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prestation || !date || !heure) return;

    const start = new Date(`${date}T${heure}`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // +1h

    const newReservation = {
      prestation,
      start: start.toISOString(),
      end: end.toISOString(),
    };

    // Envoi vers le backend PHP
    try {
      const res = await fetch("http://localhost/kyami-api/addReservation.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReservation),
      });

      const data = await res.json();

      if (data.success) {
        alert("Réservation enregistrée !");
        onAddReservation({
          title: `Réservé - ${prestation}`,
          start,
          end,
        });
      } else {
        alert("Erreur lors de la réservation.");
      }
    } catch (err) {
      console.error("Erreur:", err);
      alert("Erreur de connexion au serveur.");
    }

    // Reset
    setPrestation("");
    setDate("");
    setHeure("");
  };

  return (
    <form onSubmit={handleSubmit} className="container mb-4">
      <h4 className="mb-3">Réserver une prestation</h4>

      <div className="mb-3">
        <input
          type="text"
          placeholder="Nom de la prestation"
          className="form-control"
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
        Réserver
      </button>
    </form>
  );
};

export default ReservationForm;
