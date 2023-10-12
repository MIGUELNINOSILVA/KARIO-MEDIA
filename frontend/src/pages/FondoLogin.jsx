import React from 'react'
import '../assets/css/login.css'

import React, { useEffect, useState } from "react";

import Login from '../components/Login'

import loadingImage from './ruta/a/tu/imagen-de-carga.gif'; // Ruta a tu imagen de carga
import './tu-estilo-de-imagen-de-carga.css'; // Estilo CSS para la imagen de carga

const FondoLogin = () =>  {

  const [isLoading, setLoading] = useState(true); // Agregar estado para el indicador de carga
  return (
    <div className='primer-fondo'>
        <div className='segundo-fondo'>
          <div className='card-login'>
              <div className='container-login'>
                  <Login></Login>
              </div>
          </div>
        </div>
    </div>
  )
}


export default FondoLogin