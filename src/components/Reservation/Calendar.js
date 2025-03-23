import ReservationForm from "./ReservationForm";
import { useEffect, useState } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import fr from "date-fns/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  useEffect(() => {
    fetch("http://localhost/kyami-api/getReservations.php")
      .then((res) => res.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));
        setEvents(formattedEvents);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement des réservations :", err);
      });
  }, []);

  const handleAddReservation = (newEvent) => {
    const isDuplicate = events.some((event) => {
      return (
        event.start.getTime() === newEvent.start.getTime() ||
        (newEvent.start >= event.start && newEvent.start < event.end)
      );
    });

    if (isDuplicate) {
      alert("Ce créneau est déjà réservé !");
      return;
    }

    setEvents([...events, newEvent]);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Calendrier de Réservations</h2>

      <ReservationForm onAddReservation={handleAddReservation} />

      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={currentDate}
        view={currentView}
        onNavigate={(date) => setCurrentDate(date)}
        onView={(view) => setCurrentView(view)}
        style={{ height: 600 }}
        views={["month", "week", "day", "agenda"]}
        toolbar={true}
        messages={{
          today: "Aujourd'hui",
          previous: "Précédent",
          next: "Suivant",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          agenda: "Agenda",
        }}
        popup
      />
    </div>
  );
};

export default CalendarPage;
