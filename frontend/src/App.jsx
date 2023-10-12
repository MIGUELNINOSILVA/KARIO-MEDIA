import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FondoLogin from "./pages/FondoLogin";
import Error404 from "./pages/Error404";
import Principal from "./pages/Principal";

import FondoRegister from "./pages/FondoRegister";
import FondoBienvenido from "./pages/FondoBienvenido";
import "./assets/css/style.css";
import Reportar from "./pages/Reportar";
import ProyectoProvider from "./context/ProyectoProvider";
import UsuarioProvider from "./context/UsuarioProvider";
import { useContext } from "react";
import { UsuarioContext } from "./context/UsuarioContext";
import Help from "./pages/Help";
import AyudaProvider from "./context/AyudaProvider";

export const App = () => {
  const { userLoginData } = useContext(UsuarioContext);
  console.log(userLoginData);
  if (!userLoginData) {
    localStorage.removeItem("user-data");
    localStorage.removeItem("user-token");
  }
  const user = JSON.parse(localStorage.getItem("user-data"));

  return (
    <>
      <ProyectoProvider>
        <AyudaProvider>
          <Routes>
            <Route index element={<FondoLogin />} path="/login" />
            <Route index element={<FondoRegister />} path="/register" />
            {user ? (
              <>
                <Route index element={<FondoBienvenido />} path="/bienvenido" />
                <Route element={<Principal />} path="/Kario" />
                <Route element={<Reportar />} path="/reportes" />
                <Route element={<Help />} path="/help" />
              </>
            ) : null}
            <Route element={<Error404 />} path="*" />
          </Routes>
        </AyudaProvider>
      </ProyectoProvider>
    </>
  );
};
