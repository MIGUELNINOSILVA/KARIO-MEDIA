import React, { useEffect, useState } from "react";
import { AyudaContext } from "./AyudaContext";

const AyudaProvider = ({ children }) => {
  // Variables
  const [ayudasData, setayudasData] = useState([]);

  // Funciones
  const fetchAyudas = async () => {
    const response = await fetch("http://localhost:4000/api/ayuda");
    const data = await response.json();
    setayudasData(data);
  };

  const agregarAyudas = async (
    titulo_ayuda,
    descripcion_ayuda,
    id_usuario_ayuda
  ) => {
    console.log("fetch");
    const token = JSON.parse(localStorage.getItem("user-token"));
    const response = await fetch("http://localhost:4000/api/ayuda/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify({
        titulo_ayuda,
        descripcion_ayuda,
        id_usuario_ayuda,
      }),
    });
    if (response.ok) {
      console.log(titulo_ayuda, descripcion_ayuda, id_usuario_ayuda);
      const data = await response.json();
      setayudasData(data);
    } else {
      console.error("Error al agregar la ayuda.");
      console.log(response);
    }
    const data = await response.json();
    setayudasData(data);
  };

  // Hooks
  useEffect(() => {
    fetchAyudas();
  }, []);

  // Retorno
  const ayuda = {
    ayudasData,
    agregarAyudas,
  };

  return (
    <AyudaContext.Provider value={ayuda}>{children}</AyudaContext.Provider>
  );
};

export default AyudaProvider;
