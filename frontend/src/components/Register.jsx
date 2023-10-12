import "../assets/css/register.css";
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/KARIO_LOGO.png";
import { UsuarioContext } from "../context/UsuarioContext";

const Register = () => {
  // Variables para el formulario
  const [usuario, setUsuario] = useState("");
  const [email, setemail] = useState("");
  const [contrasena, setContrasena] = useState("");

  //Usar contexto para enviar los datos del formulario
  const { fetchRegister } = useContext(UsuarioContext);

  //Funcion para enviar los datos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviando");
    const dataLogin = {
      nombre_usuario: usuario,
      correo: email,
      contraseña: contrasena,
    };
    await fetchRegister(usuario, email, contrasena);
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
              Por favor ingresa los siguientes datos para registrarte en la
              plataforma
            </p>
          </div>
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="mb-3 label">
              <label htmlFor="usuario" className="col-form-label">
                Nombre Completo:
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
              <label htmlFor="correo" className="col-form-label">
                Correo:
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                value={email}
                onChange={(e) => setemail(e.target.value)}
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

export default Register;
