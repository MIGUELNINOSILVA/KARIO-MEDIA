import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FondoLogin from "./pages/FondoLogin";
// import login from './pages/login'
import Error404 from "./pages/Error404";
import Principal from "./pages/Principal";
import help from "./pages/help";
import FondoRegister from "./pages/FondoRegister";
import FondoBienvenido from "./pages/FondoBienvenido";
import "./assets/css/style.css";
import Reportar from "./pages/Reportar";
import ProyectoProvider from "./context/ProyectoProvider";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProyectoProvider>
          <Routes>
            <Route exact path="/login" Component={FondoLogin}></Route>
            <Route exact path="/register" Component={FondoRegister}></Route>
            <Route exact path="/bienvenido" Component={FondoBienvenido}></Route>
            {/* <Route exact path='/'  Component={login}></Route> */}
            <Route exact path="/Kario" Component={Principal}></Route>
            <Route exact path="/reportes" Component={Reportar}></Route>
            <Route exact path="/help" Component={help}></Route>
            <Route exact path="*" Component={Error404}></Route>{" "}
            {/*//! Esta ruta debe estar de ultimo!! */}
          </Routes>
        </ProyectoProvider>
      </BrowserRouter>
    </>
  );
};
