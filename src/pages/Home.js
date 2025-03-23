import React from "react";
import { Link } from "react-router-dom";
import "./../assets/index.css";

function Home() {
  return (
    <div className="home-content">
      {/* Section Héros */}
      <section className="text-center py-5">
        <h1 style={{ color: "#D4AF37", fontWeight: "bold" }}>
          Bienvenue sur Kyami 🎉
        </h1>
        <p className="lead">Organisez vos événements avec élégance.</p>
        <Link to="/events" className="btn btn-warning mt-3">
          Découvrir les événements
        </Link>
      </section>

      {/* Section À propos */}
      <section className="container text-center py-5">
        <h2 className="mb-3">Qu'est-ce que Kyami ?</h2>
        <p className="text-muted">
          Kyami est une plateforme de réservation d'événements simple et intuitive. 
          Que vous planifiez un anniversaire, un concert ou un séminaire, Kyami vous accompagne 
          pas à pas pour une organisation réussie.
        </p>
      </section>

      {/* Section Fonctionnalités */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Nos fonctionnalités</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <h5>🎯 Réservation Simplifiée</h5>
            <p>Réservez en quelques clics, sans prise de tête.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>📅 Calendrier Interactif</h5>
            <p>Visualisez tous les créneaux disponibles en temps réel.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>🔐 Compte sécurisé</h5>
            <p>Créez un compte et suivez toutes vos réservations facilement.</p>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ils nous font confiance</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <blockquote>
                <p>"Un outil vraiment pratique pour mes événements privés !"</p>
                <footer className="text-muted">– Sarah B.</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-3">
              <blockquote>
                <p>"Simple, fluide et efficace. Kyami gère tout."</p>
                <footer className="text-muted">– Karim D.</footer>
              </blockquote>
            </div>
            <div className="col-md-4 mb-3">
              <blockquote>
                <p>"Plus besoin de jongler entre mails et appels, tout est là."</p>
                <footer className="text-muted">– Julie M.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action final */}
      <section className="text-center py-5">
        <h2>Prêt à organiser votre événement ?</h2>
        <Link to="/events" className="btn btn-dark mt-3">
          Je commence maintenant
        </Link>
      </section>
    </div>
  );
}

export default Home;
