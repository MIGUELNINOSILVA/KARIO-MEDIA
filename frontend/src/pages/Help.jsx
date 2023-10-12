import React, { useState } from 'react'
import ResponsiveAppBar from './../components/ResponsiveAppBar'
import Ayudas from '../components/Ayudas'
import './../assets/css/help.css'
import { useLocation } from 'react-router-dom'


const Help = () => {

  const [miFuncion, setMiFuncion] = useState(null)

  return (
    <div>
       <ResponsiveAppBar miFuncion={miFuncion} />
       <div className="contenedorAyudas" >
          <Ayudas setMiFuncion={setMiFuncion}/>
       </div>
    </div>
  )
}

export default Help
