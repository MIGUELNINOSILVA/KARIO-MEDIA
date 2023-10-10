
import '../assets/css/bienvenido.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/KARIO_LOGO.png'
import perfil from '../assets/img/c74645dae512c48e07163cd68629a286.jpg'


const Login = () => {
  return (
    <>
      <div className='contenido-login'>
        <div className='contenido'>
            <div className='logo'>
              <img src={logo} alt="" />
              <h2>Media</h2>
            </div>
            <div className='texto-medio'>
              <h1>Bienvenido</h1>
              <img src={perfil} alt=""/>
            </div>
            <div className='texto-final'>
                <h1>Jose Daniel Vargas</h1>
              <p>Usuario Administrador</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login