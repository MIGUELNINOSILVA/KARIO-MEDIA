import FondoLogin from '../components/FondoLogin'
import '../assets/css/login.css'
import React from 'react'

const login = () => {
  return (
    <FondoLogin>
      <div className='contenido-login'>
      <div>
        <img className='logo' src="" alt="" />
        <h2>Bienvenido al panel digital de KARIO Media</h2>
        <p>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>  
      </div>
      <form className='login'>
        <div>
          <label>Usuario</label>
          <input className='input-usuario' type="text" />
        </div>
        <div>
          <label>Usuario</label>
          <input className='input-usuario' type="text" />
        </div>
        <div>
          <button className='ingresar'>Ingresar al panel</button>
        </div>
      </form>

      <p>Tienes Problemas para ingresar? Por favor contactarse con asistencia tecnica lo mas pronto posible</p>

      </div>
    </FondoLogin>
  )
}

export default login