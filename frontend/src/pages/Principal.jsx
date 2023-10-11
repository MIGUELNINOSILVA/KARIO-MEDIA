import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Proyectos from '../components/Proyectos'
import './../assets/css/proyectos.css'

const Principal = () => {
  return (
    <>
        <ResponsiveAppBar/>
        <div className="contenedorProyectos">
          <Proyectos/>
      </div>
    </>
  )
}

export default Principal