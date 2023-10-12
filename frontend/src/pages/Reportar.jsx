import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Reportes from '../components/Reportes.jsx'
import '../assets/css/reportes.css'
import { Container } from '@mui/material'
import '../assets/css/cargar.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'

const Reportar = () => {
  const url = 'http://localhost:4000/api/reporte'

  const [isLoading, setLoading] = useState(true);
  const [reportes, setReportes] = useState([])


  const getReportes = async () => {
    try {
      const respuesta = await fetch(url);
      
      const datos = await respuesta.json();
      console.log(datos);
      setReportes(datos)
      
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  useEffect(()=>{
    getReportes()
},[])
  useEffect(() => {
    getReportes()
      .then(() => {
        setTimeout(() => {
          setLoading(false); 
        }, 2000); 
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
        show_alerta('Error en la solicitud');
        setLoading(false); 
      });
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