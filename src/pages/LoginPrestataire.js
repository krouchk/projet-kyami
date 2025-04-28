import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPrestataire() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/kyami-api/loginPrestataire.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, motdepasse }),
      });

      const data = await res.json();

      if (data.success) {
        // Stocker l'info de connexion
        localStorage.setItem("prestataireConnected", JSON.stringify(data.prestataire));
        alert("Connexion réussie !");
        navigate("/dashboard-prestataire");
      } else {
        alert("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Erreur serveur.");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-gold">Connexion Prestataire</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Mot de passe"
            className="form-control"
            value={motdepasse}
            onChange={(e) => setMotdepasse(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-gold w-100">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default LoginPrestataire;
