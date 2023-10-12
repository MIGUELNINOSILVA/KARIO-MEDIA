import React, { useState } from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Reportes from '../components/Reportes.jsx'
import '../assets/css/reportes.css'
import { Container } from '@mui/material'

const Reportar = () => {
  const [miFuncion, setMiFuncion] = useState(null)
  return (
    <>
      <ResponsiveAppBar miFuncion={miFuncion}/>
      <Container maxWidth="lg" className='contenedorReportes'>
        <Reportes setMiFuncion={setMiFuncion} />
      </Container>
    </>
  )
}

export default Reportar