import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Reportes from '../components/Reportes.jsx'
import '../assets/css/reportes.css'
import { Container } from '@mui/material'
import '../assets/css/cargar.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'

const Reportar = () => {
 

  const [isLoading, setLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Simulación de carga completa después de 2000 ms (2 segundos)
    }, 2000);
  }, []);
  const [miFuncion, setMiFuncion] = useState(null)

  return (
    <>
      {isLoading ? (
      <div className="cargando" >
          <img src={loadingImage} alt="Loading" className="loading-image" />        
      </div>     
        ) : (
            <>
            
                  <ResponsiveAppBar miFuncion={miFuncion}/>
                  <Container maxWidth="lg" className='contenedorReportes'>
                    <Reportes setMiFuncion={setMiFuncion}/>
                  </Container>
            </>
        )}

    </>
  )
}

export default Reportar