import "../assets/css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/KARIO_LOGO.png";
import { useContext, useState } from "react";
import { UsuarioContext } from "./../context/UsuarioContext";

const Login = () => {
  // Variables para el formulario
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  //Usar contexto para enviar los datos del formulario
  const { fetchLogin } = useContext(UsuarioContext);

  //Funcion para enviar los datos del formulario
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("enviando");
    const dataLogin = {
      correo: usuario,
      contraseña: contrasena,
    };
    await fetchLogin(usuario, contrasena);

  };

  return (
    <>
      <div className="contenido-login">
        <div className="contenido">
          <div className="logo">
            <img src={logo} alt="" />
            <h2>Media</h2>
          </div>

          <div className="texto-medio">
            <h1>Bienvenido al panel digital de KARIO Media</h1>
            <p>
              Por favor ingresa los siguientes datos para ingresar a la
              plataforma
            </p>
          </div>
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="mb-3 label">
              <label htmlFor="usuario" className="col-form-label">
                Usuario:
              </label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="mb-3 label">
              <label htmlFor="contrasena" className="col-form-label">
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            <div className="contenedor-button">
              <button type="submit" className="button">
                Ingresar al Panel
              </button>
            </div>
          </form>
          <div className="texto-final">
            <p>
              Tienes Problemas para ingresar? Por favor contactarse con
              asistencia técnica{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
