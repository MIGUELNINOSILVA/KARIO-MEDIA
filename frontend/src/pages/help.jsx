import React from 'react'
import ResponsiveAppBar from './../components/ResponsiveAppBar'
import Ayudas from '../components/Ayudas'
import './../assets/css/help.css'


const help = () => {

  return (
    <div>
       <ResponsiveAppBar/>
       
       <div className="contenedorAyudas" >
          <Ayudas/>
       </div>
    </div>
  )
}

export default help
