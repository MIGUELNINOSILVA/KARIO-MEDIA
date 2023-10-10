import React from 'react'
import ResponsiveAppBar from './../components/ResponsiveAppBar'
import BotonAAyuda from '../components/BotonAAyuda'
import ModalAyuda from '../components/ModalAyuda'


const help = () => {
  return (
    <div>
       <ResponsiveAppBar/>
       <ModalAyuda/>
       <div className="contenedorAyudas">
        
       </div>
    </div>
  )
}

export default help
