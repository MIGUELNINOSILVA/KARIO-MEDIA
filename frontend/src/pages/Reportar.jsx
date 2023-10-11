import React from 'react'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Reportes from '../components/Reportes.jsx'
import '../assets/css/reportes.css'
import { Container } from '@mui/material'

const Reportar = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <Container maxWidth="lg" className='contenedorReportes'>
        <Reportes/>
      </Container>
    </>
  )
}

export default Reportar