import React from "react";
import EventCard from "../components/Events/EventCard";

function Events() {
  // Liste d'événements avec des données fictives
  const events = [
    {
      id: 1,
      title: "Soirée Anniversaire",
      description: "Venez fêter un anniversaire spécial avec nous !",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Concert Live",
      description: "Un concert incroyable dans un lieu secret.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Conférence Tech",
      description: "Rejoignez-nous pour une conférence passionnante sur la tech.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: "#D4AF37" }}>
        Tous les événements 📅
      </h1>
      <div className="row">
        {/* Affichage des cartes pour chaque événement */}
        {events.map((event) => (
          <div className="col-md-4" key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
