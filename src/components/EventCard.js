import React from "react";

function EventCard({ event }) {
  return (
    <div className="card mb-4" style={{ width: "18rem" }}>
      <img src={event.image} className="card-img-top" alt={event.title} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: "#D4AF37" }}>
          {event.title}
        </h5>
        <p className="card-text">{event.description}</p>
        <a href={`/event/${event.id}`} className="btn btn-kyami">
          Voir Détails
        </a>
      </div>
    </div>
  );
}

export default EventCard;
