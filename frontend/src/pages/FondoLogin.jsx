import React from 'react'
import '../assets/css/login.css'

import Login from '../components/Login'

const FondoLogin = () =>  {
  return (
    <div className='primer-fondo'>
        <div className='segundo-fondo'>
          <div className='card-login'>
              <div className='container-login'>
                  <Login></Login>
                  
              </div>
          </div>
        </div>
    </div>
  )
}


export default FondoLogin