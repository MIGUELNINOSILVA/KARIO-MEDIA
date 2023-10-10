
import '../assets/css/register.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/KARIO_LOGO.png'

const Register = () => {
  return (
    <>
      <div className='contenido-login'>
        <div className='contenido'>
            <div className='logo'>
              <img src={logo} alt="" />
              <h2>Media</h2>
            </div>

            <div className='texto-medio'>
              <h1>Bienvenido al panel digital de KARIO Media</h1>
              <p>Por favor ingresa los siguientes datos para registrarte en la plataforma</p>
            </div>
            <form className='formulario'>
              <div className="mb-3 label">
                <label htmlFor="usuario" className="col-form-label">Nombre Completo:</label>
                <input type="text" className="form-control" id="usuario" />
              </div>
              <div className="mb-3 label" >
                <label htmlFor="correo" className="col-form-label">Correo:</label>
                <input type="email" className="form-control" id="correo" />
              </div>
              <div className="mb-3 label" >
                <label htmlFor="contrasena" className="col-form-label">Contraseña:</label>
                <input type="password" className="form-control" id="contrasena" />
              </div>
              <div className='contenedor-button'>
                <button type="submit" className="button">Ingresar al Panel</button>
              </div>
            </form>
            <div className='texto-final'>
              <p>Tienes Problemas para ingresar? Por favor contactarse con asistencia técnica </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Register