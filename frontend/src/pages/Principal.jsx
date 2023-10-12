import React, { useState } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Proyectos from '../components/Proyectos'
import './../assets/css/proyectos.css'

const Principal = () => {
  const [miFuncion, setMiFuncion] = useState(null)
  return (
    <>
        <ResponsiveAppBar miFuncion={miFuncion}/>
        <div className="contenedorProyectos">
          <Proyectos setMiFuncion={setMiFuncion} />
      </div>
    </>
  )
}

export default Principal