import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    username: "",
    email: "",
    telephone: "",
    mot_de_passe: "",
    confirm_password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifications côté client avant d'envoyer
    if (formData.mot_de_passe.length < 6) {
      toast.error("❌ Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    if (formData.mot_de_passe !== formData.confirm_password) {
      toast.error("❌ Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const res = await fetch("http://localhost/kyami-api/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Inscription réussie ! Vérifiez votre e-mail.");
        setFormData({
          prenom: "",
          nom: "",
          username: "",
          email: "",
          telephone: "",
          mot_de_passe: "",
          confirm_password: "",
          rememberMe: false,
        });
      } else {
        toast.error(data.message || "❌ Erreur lors de l'inscription.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <ToastContainer />
      <h2 className="mb-4 text-center">Créer un compte</h2>

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
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          className="form-control mb-3"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={formData.email}
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

        <div className="input-group mb-3">
          <input
            type={showPassword ? "text" : "password"}
            name="mot_de_passe"
            placeholder="Mot de passe"
            className="form-control"
            value={formData.mot_de_passe}
            onChange={handleChange}
            required
          />
          <div className="input-group-text">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            &nbsp;Afficher
          </div>
        </div>

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirmer le mot de passe"
          className="form-control mb-3"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Se souvenir de moi
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          S'inscrire
        </button>
      </form>
      <Link to="/register-prestataire" className="btn btn-secondary mt-3">S'inscrire en tant que prestataire</Link>
    </div>
  );
}

export default Register;
