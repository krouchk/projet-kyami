import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProfile() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prenom: user?.prenom || "",
    nom: user?.nom || "",
    telephone: user?.telephone || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/kyami-api/editProfile.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user.id,
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Profil mis à jour avec succès !");
        login(data.user);
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else {
        toast.error(data.message || "❌ Erreur lors de la mise à jour.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <ToastContainer />
      <h2 className="mb-4 text-center">✏️ Modifier mes informations</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          className="form-control mb-3"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          className="form-control mb-3"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone"
          className="form-control mb-3"
          value={formData.telephone}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success w-100">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
