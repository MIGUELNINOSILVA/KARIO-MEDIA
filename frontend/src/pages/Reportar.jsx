import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Reportes from '../components/Reportes.jsx'

const Reportar = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <div className="contenedorReportes">
        <Reportes/>
      </div>
    </>
  )
}

export default Reportar