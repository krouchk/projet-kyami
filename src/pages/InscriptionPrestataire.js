import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InscriptionPrestataire() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    motdepasse: "",
    localisation: "",
    categorie: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost/kyami-api/registerPrestataire.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prenom: formData.prenom,
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          motdepasse: formData.motdepasse,
          localisation: formData.localisation,
          categorie: formData.categorie,
        }),
      });
  
      const data = await res.json();
  
      if (data.success) {
        alert("Inscription réussie !");
        navigate("/login-prestataire");
      } else {
        alert("Erreur lors de l'inscription : " + data.message);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur serveur.");
    }
  };
  
  

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-gold">Inscription Prestataire</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="form-control"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            className="form-control"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone"
            className="form-control"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="motdepasse"
            placeholder="Mot de passe"
            className="form-control"
            value={formData.motdepasse}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="localisation"
            placeholder="Localisation"
            className="form-control"
            value={formData.localisation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <select
            name="categorie"
            className="form-select"
            value={formData.categorie}
            onChange={handleChange}
            required
          >
            <option value="">Choisir une catégorie</option>
            <option value="DJ / Groupe de musique">DJ / Groupe de musique</option>
            <option value="Traiteur">Traiteur</option>
            <option value="Location de Salle">Location de Salle</option>
            <option value="Photographe / Vidéaste">Photographe / Vidéaste</option>
            <option value="Décorateur">Décorateur</option>
            <option value="Animation">Animation</option>
            <option value="Service de boissons / Barman">Service de boissons / Barman</option>
            <option value="Location Matériel">Location Matériel</option>
          </select>
        </div>
        <button type="submit" className="btn btn-gold w-100">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default InscriptionPrestataire;
