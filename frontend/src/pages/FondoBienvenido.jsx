import React, { useEffect, useState } from 'react'
import '../assets/css/login.css'
import '../assets/css/cargar.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'
import Bienvenido from '../components/Bienvenido'

const FondoBienvenido = () =>  {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulación de carga completa después de 2000 ms (2 segundos)
    }, 2000);
  }, []);

  return (
    <>
        <div className='primer-fondo3'>
          <div className='segundo-fondo3'>
            {isLoading ? (
              <div className="cargando" >
                  <img src={loadingImage} alt="Loading" className="loading-image" />        
              </div>     
                ) : (
                    <>

                        <div className='card-login3'>
                            <div className='container-login3'>
                                <Bienvenido></Bienvenido>
                            </div>
                        </div>
                     
                   </>
            
              )}
          </div>
        </div>
    </>
    
  )
}


export default FondoBienvenido