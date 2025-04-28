import React from "react";
import { useParams } from "react-router-dom";
import CalendarPage from "../components/Reservation/Calendar";

function Reservations() {
  const { prestataire } = useParams();

  return (
    <div>
      <CalendarPage prestataire={prestataire} />
    </div>
  );
}

export default Reservations;
