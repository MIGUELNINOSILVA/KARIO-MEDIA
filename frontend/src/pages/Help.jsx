import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Ayudas from '../components/Ayudas'
import './../assets/css/help.css'
import '../assets/css/cargar.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'

const Help = () => {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulación de carga completa después de 2000 ms (2 segundos)
    }, 2000);
  }, []);


  return (
    <>
      {isLoading ? (
      <div className="cargando" >
          <img src={loadingImage} alt="Loading" className="loading-image" />        
      </div>     
        ) : (
            <>
            <div>
              <ResponsiveAppBar/>
              
              <div className="contenedorAyudas">
                  <Ayudas/>
              </div>
            </div>
            </>
        )}
    
    </>
    

  )
}

export default Help;
