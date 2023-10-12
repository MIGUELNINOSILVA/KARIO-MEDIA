import React, { useEffect, useState } from 'react'
import '../assets/css/login.css'
import '../assets/css/cargar.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'

import Login from '../components/Login'



const FondoLogin = () =>  {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulación de carga completa después de 2000 ms (2 segundos)
    }, 2000);
  }, []);

  return (
    <div className='primer-fondo'>
        <div className='segundo-fondo'>
          {isLoading ? (
              <div className="cargando" >
                  <img src={loadingImage} alt="Loading" className="loading-image" />        
              </div>     
                ) : (
                    <>
                        <div className='card-login'>
                            <div className='container-login'>
                                <Login></Login>
                            </div>
                        </div>
                   </>
            
              )}
        </div>
    </div>
  )
}


export default FondoLogin