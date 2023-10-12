import React from 'react'
import '../assets/css/register.css'

import Register from '../components/Register'

const FondoRegister = () =>  {
  return (
    <div className='primer-fondo2'>
        <div className='segundo-fondo2'>
          <div className='card-login'>
              <div className='container-login'>
                  <Register></Register>
              </div>
          </div>
        </div>
    </div>
  )
}


export default FondoRegister