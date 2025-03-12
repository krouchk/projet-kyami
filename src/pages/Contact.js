import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // État pour suivre la soumission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Afficher le message de confirmation
    // Réinitialiser le formulaire après l'envoi
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Ajout de la logique d'envoi (par exemple, envoi au backend)
    setTimeout(() => {
      setIsSubmitted(false); // Cacher le message après quelques secondes
    }, 4000); // 4 secondes
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">
        <span style={{ color: "#D4AF37" }}>Contactez-nous 📩</span>
      </h1>
      <p className="text-center">
        Une question ? Un projet ? Envoyez-nous un message !
      </p>

      {isSubmitted && (
        <div
          className="alert alert-success text-center"
          role="alert"
          style={{ animation: "fadeIn 1s" }}
        >
          <strong>Message envoyé avec succès !</strong>
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-kyami w-100">
              Envoyer ✉️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
