import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Proyectos from '../components/Proyectos'
import './../assets/css/proyectos.css'
import { PanelIndicadores } from '../components/PanelIndicadores'

const Principal = () => {
  return (
    <>
        <ResponsiveAppBar/>
        
        <div className="contenedorProyectos">
        <PanelIndicadores />
          <Proyectos/>
      </div>
    </>
  )
}

export default Principal