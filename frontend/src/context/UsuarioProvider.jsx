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
  const [userLoginData, setuserLoginData] = useLocalStorage("user-data", "");
  const [datosUsuario, setDatosUsuario] = useState({});
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
        setuserLoginData(data);
        setDatosUsuario(data);
        setToken(data.tokenuser);
        setUserLogin(data.tokenuser);
        navigate("/bienvenido");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRegister = async (nombre_usuario, email, password) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_usuario,
          correo: email,
          contraseña: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setuserLoginData(data);
        setDatosUsuario(data);
        setToken(data.tokenuser);
        setUserLogin(data.tokenuser);
        navigate("/bienvenido");
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
    datosUsuario,
    userLoginData,
    setUsuario,
    setContrasena,
    fetchLogin,
    fetchRegister,
  };

  return (
    <UsuarioContext.Provider value={usuarioData}>
      {children}
    </UsuarioContext.Provider>
  );
};

export default UsuarioProvider;
