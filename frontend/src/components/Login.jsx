
import '../assets/css/login.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/KARIO_LOGO.png'

const Login = () => {
  return (
    <>
      <div className='contenido-login'>
        <div className='contenido'>
          <div className='logo'>
            <img className='logo' src={logo} alt="" />
            <h2>Media</h2>
          </div>

          <div className='texto-medio'>
              <h1>Bienvenido al panel digital de KARIO Media</h1>
              <p>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
          </div>
          <form className='formulario'>
            <div class="mb-3 label">
              <label for="recipient-name" class="col-form-label">Usuario:</label>
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-3 label" >
              <label for="message-text" class="col-form-label">Contraseña:</label>
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div className='contenedor-button'>         
                <button type="button" class="button">Ingresar al Panel</button>   
            </div>
          
          </form>
          <div className='texto-final'>
            <p>Tienes Problemas para ingresar? Por favor contactarse con asistencia tecnica lo mas pronto posible</p>
          </div>
     
        </div>





       

      </div>
    </>
  )
}

export default Login