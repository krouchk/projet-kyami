import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="container my-5">
        <h2 className="text-center">Veuillez vous connecter pour voir votre profil.</h2>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4 text-center">👤 Mon Profil</h2>

      <div className="card p-4 shadow-sm">
        <h5 className="mb-3">Informations personnelles</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Prénom :</strong> {user.prenom}</li>
          <li className="list-group-item"><strong>Nom :</strong> {user.nom}</li>
          <li className="list-group-item"><strong>Nom d'utilisateur :</strong> {user.username}</li>
          <li className="list-group-item"><strong>Email :</strong> {user.email}</li>
          <li className="list-group-item"><strong>Téléphone :</strong> {user.telephone ? user.telephone : "Non renseigné"}</li>
        </ul>

        <div className="text-center mt-4">
          <Link to="/edit-profile" className="btn btn-primary">
            ✏️ Modifier mes informations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
