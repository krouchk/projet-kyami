import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    const counters = [
      { id: "counter1", value: 500 },
      { id: "counter2", value: 200 },
      { id: "counter3", value: 150 }
    ];

    counters.forEach(counter => {
      const element = document.getElementById(counter.id);
      if (element) {
        let current = 0;
        const increment = Math.ceil(counter.value / 100);
        const interval = setInterval(() => {
          current += increment;
          if (current >= counter.value) {
            current = counter.value;
            clearInterval(interval);
          }
          element.textContent = current;
        }, 30);
      }
    });

    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.style.display = "block";
        } else {
          backToTop.style.display = "none";
        }
      });
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, []);

  const events = [
    {
      title: "Anniversaire Surprise",
      prestations: "Lieu de réception, Traiteur, DJ/Groupe, Décoration, Animateur, Photographe, Service de boissons, Location matériel, Transport",
      image: "/assets/img/fete-surprise.jpg"
    },
    {
      title: "Anniversaire Enfant",
      prestations: "Animation enfants, Château gonflable, Gâteau à thème, Traiteur enfant, Décoration thématique, Location salle/jardin, Photographe enfants, Ateliers créatifs",
      image: "/assets/img/anniversaire-enfant1.jfif"
    },
    {
      title: "Concert Live",
      prestations: "Location scène/sono, Groupe ou artiste, Régisseur/technicien son, Sécurité, Billetterie, Food trucks/buvette, Lumières/effets spéciaux, Photographe/vidéaste",
      image: "/assets/img/musique1.jpg"
    },
    {
      title: "Soirée Cocktail",
      prestations: "Barman/mixologue, Traiteur cocktail, DJ lounge, Location mobilier, Décoration élégante, Photographe, Animation cocktail/dégustation",
      image: "/assets/img/soiree-cocktail.png"
    },
    {
      title: "Garden Party",
      prestations: "Location chapiteau, Traiteur barbecue/buffet, Décoration florale/lumineuse, Musique live/playlist, Jeux de jardin, Service boissons, Mobilier extérieur",
      image: "/assets/img/garden-party.jfif"
    },
    {
      title: "Baby Shower",
      prestations: "Décoration à thème, Traiteur sucré/salé, Gâteau personnalisé, Animatrice baby shower, Photographe, Ateliers créatifs, Cadeaux invités",
      image: "/assets/img/baby-shower.jpg"
    }
  ];

  return (
    <>
      <button id="backToTop" className="btn btn-gold position-fixed" style={{ bottom: "20px", right: "20px", display: "none" }}>↑</button>

      {/* HERO */}
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h1 className="display-5">Organisez vos événements comme un pro !</h1>
        <p className="lead mt-3">Des idées, des outils et une plateforme pour réussir.</p>
        <Link to="/prestations" className="btn btn-gold mt-4 px-4 py-2">Commencer maintenant</Link>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="text-gold mb-4">Pourquoi Nous Choisir ?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="feature-card">
                <i className="bi bi-clock text-gold display-4"></i>
                <h5 className="mt-3">Gain de Temps</h5>
                <p>Planifiez vos événements en un rien de temps grâce à nos outils innovants.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card">
                <i className="bi bi-brush text-gold display-4"></i>
                <h5 className="mt-3">Personnalisation</h5>
                <p>Créez des événements uniques adaptés à votre style et vos envies.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card">
                <i className="bi bi-wallet2 text-gold display-4"></i>
                <h5 className="mt-3">Respect du Budget</h5>
                <p>Des solutions pour tous les budgets sans compromis sur la qualité.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card">
                <i className="bi bi-people text-gold display-4"></i>
                <h5 className="mt-3">Communauté</h5>
                <p>Rejoignez notre communauté et partagez vos idées avec d'autres passionnés.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="text-gold mb-4">Nos Réalisations</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h3 className="text-gold" id="counter1">0</h3>
              <p>Événements réussis</p>
            </div>
            <div className="col-md-4">
              <h3 className="text-gold" id="counter2">0</h3>
              <p>Utilisateurs satisfaits</p>
            </div>
            <div className="col-md-4">
              <h3 className="text-gold" id="counter3">0</h3>
              <p>Modèles personnalisés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Événements Disponibles */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-gold mb-4 text-center">Nos Événements Disponibles</h2>
          <div className="row g-4">
            {events.map((event, index) => (
              <div key={index} className="col-md-6">
                <div className="card shadow-sm p-3 h-100">
                  <img src={event.image} alt={event.title} className="card-img-top img-fluid rounded" style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-gold">{event.title}</h5>
                    <p className="card-text">{event.prestations}</p>
                    <Link to="/prestations" className="btn btn-gold mt-3">Commencer un événement</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Témoignages */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="text-gold mb-4">Témoignages</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="blockquote text-dark">
                  <p className="mb-4">"Kyami a transformé notre fête d'anniversaire en un événement mémorable. Merci !"</p>
                  <footer className="blockquote-footer">Kellyann K.</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote text-dark">
                  <p className="mb-4">"Une plateforme intuitive et des idées géniales pour nos événements."</p>
                  <footer className="blockquote-footer">Mehdi O.</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote text-dark">
                  <p className="mb-4">"Grâce à Kyami, organiser un événement est devenu un vrai plaisir."</p>
                  <footer className="blockquote-footer">Monikha K.</footer>
                </blockquote>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-gold mb-4 text-center">FAQ</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  Comment fonctionne Kyami ?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Kyami vous permet de choisir un modèle prédéfini, de le personnaliser et d’organiser facilement votre événement.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  Puis-je personnaliser un modèle ?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Oui, chaque modèle est entièrement personnalisable selon vos préférences.
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
