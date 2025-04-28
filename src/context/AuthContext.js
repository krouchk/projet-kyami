import React, { createContext, useState, useEffect } from "react";

// Création du contexte
export const AuthContext = createContext();

// Provider global
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Au chargement, récupérer le user s'il existe
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
