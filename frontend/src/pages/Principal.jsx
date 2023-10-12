import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Proyectos from '../components/Proyectos'
import './../assets/css/proyectos.css'
import '../assets/css/cargar.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'


const Principal = () => {
  const [miFuncion, setMiFuncion] = useState(null)

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
              <ResponsiveAppBar miFuncion={miFuncion}/>
              <div className="contenedorProyectos">
                <Proyectos setMiFuncion={setMiFuncion} />
              </div>
            </>
        )}

    </>
  )
}

export default Principal