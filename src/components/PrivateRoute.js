import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si pas connecté, rediriger vers /login
    return <Navigate to="/login" replace />;
  }

  // Sinon, autoriser l'accès
  return children;
}

export default PrivateRoute;
