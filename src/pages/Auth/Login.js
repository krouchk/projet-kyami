import React, { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    mot_de_passe: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost/kyami-api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Connexion réussie !");
        login(data.user);

        // Si "Se souvenir de moi" est coché
        if (credentials.rememberMe) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        navigate("/dashboard");
      } else {
        toast.error(data.message || "❌ Identifiants incorrects.");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <ToastContainer />
        <h2 className="mb-4 text-center">Se connecter</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            className="form-control mb-3"
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <div className="mb-3">
            <input
              type={showPassword ? "text" : "password"}
              name="mot_de_passe"
              placeholder="Mot de passe"
              className="form-control mb-2"
              value={credentials.mot_de_passe}
              onChange={handleChange}
              required
            />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="showPassword"
                style={{ width: "20px", height: "20px" }}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label className="form-check-label" htmlFor="showPassword">
                Afficher le mot de passe
              </label>
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              style={{ width: "20px", height: "20px" }}
              checked={credentials.rememberMe}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Se souvenir de moi
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
        <Link to="/login-prestataire" className="btn btn-secondary mt-3">Se connecter en tant que prestataire</Link>
      </div>
    </div>
  );
}

export default Login;
