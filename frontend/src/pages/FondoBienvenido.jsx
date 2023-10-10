import React from 'react'
import '../assets/css/login.css'

import Bienvenido from '../components/Bienvenido'

const FondoBienvenido = () =>  {
  return (
    <div className='primer-fondo'>
        <div className='segundo-fondo'>
          <div className='card-login'>
              <div className='container-login'>
                  <Bienvenido></Bienvenido>
              </div>
          </div>
        </div>
    </div>
  )
}


export default FondoBienvenido