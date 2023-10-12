import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";
import { useLocalStorage } from "react-use";
import { Navigate, useNavigate } from "react-router-dom";

const UsuarioProvider = ({ children }) => {
  // Variables
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useLocalStorage("user-token", "");
  //Re navegar
  const navigate = useNavigate();

  // Funciones
  const fetchLogin = async (email, password) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: email, contraseña: password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setToken(data.tokenuser);
        setUserLogin(data.tokenuser);
        navigate("/kario");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Hooks

  // Retorno
  const usuarioData = {
    usuario,
    contrasena,
    token,
    userLogin,
    setUsuario,
    setContrasena,
    fetchLogin,
  };

  return (
    <UsuarioContext.Provider value={usuarioData}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
