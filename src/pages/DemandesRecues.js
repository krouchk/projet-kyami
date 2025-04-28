import React, { useEffect, useState } from "react";

function DemandesRecues() {
  const [demandes, setDemandes] = useState([]);
  const prestataire = JSON.parse(localStorage.getItem("prestataireConnected"));

  useEffect(() => {
    if (!prestataire) return;

    fetch(`http://localhost/kyami-api/getDemandesPrestataire.php?nom=${encodeURIComponent(prestataire.nom)}`)
      .then((res) => res.json())
      .then((data) => setDemandes(data))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, [prestataire]);

  const gererDemande = async (id, nouveauStatus) => {
    try {
      const res = await fetch("http://localhost/kyami-api/updateReservationStatus.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: nouveauStatus }),
      });

      const data = await res.json();

      if (data.success) {
        setDemandes((prevDemandes) =>
          prevDemandes.map((d) =>
            d.id === id ? { ...d, status: nouveauStatus } : d
          )
        );
      } else {
        alert("Erreur lors de la mise à jour du statut.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur serveur.");
    }
  };

  if (!prestataire) {
    return <div className="text-center my-5">Non connecté.</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center text-gold mb-4">Demandes Reçues</h2>

      {demandes.length === 0 ? (
        <p className="text-center">Aucune demande pour l'instant.</p>
      ) : (
        <ul className="list-group">
          {demandes.map((demande, index) => (
            <li key={index} className="list-group-item">
              <strong>Prestation :</strong> {demande.prestation} <br />
              <strong>Date :</strong> {new Date(demande.start).toLocaleString()} <br />

              {demande.status === "en attente" ? (
                <div className="mt-2">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => gererDemande(demande.id, "confirmée")}
                  >
                    Accepter
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => gererDemande(demande.id, "refusée")}
                  >
                    Refuser
                  </button>
                </div>
              ) : (
                <div className="mt-2">
                  {demande.status === "confirmée" ? (
                    <span className="badge bg-success">Acceptée</span>
                  ) : (
                    <span className="badge bg-danger">Refusée</span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DemandesRecues;
