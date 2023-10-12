import React from 'react'
import '../assets/css/login.css'

import Bienvenido from '../components/Bienvenido'

const FondoBienvenido = () =>  {
  return (
    <div className='primer-fondo3'>
        <div className='segundo-fondo3'>
          <div className='card-login3'>
              <div className='container-login3'>
                  <Bienvenido></Bienvenido>
              </div>
          </div>
        </div>
    </div>
  )
}


export default FondoBienvenido