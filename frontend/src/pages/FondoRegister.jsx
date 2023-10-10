import React from 'react'
import '../assets/css/login.css'

import Register from '../components/Register'

const FondoRegister = () =>  {
  return (
    <div className='primer-fondo'>
        <div className='segundo-fondo'>
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