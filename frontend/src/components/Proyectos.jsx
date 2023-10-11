import React, { useEffect, useState } from 'react'
import ModalProyectos from './ModalProyectos';

const listaProyectos = [
    {
        indicador:'Modelado 3D',
        descripcion:'descripcion del modelado 3D',
        categoria:'Agíl',
        fechaInicio:'2023/08/23',
        fechaFinal:'2023/12/15',
        formula:'Metodología Agíl',
        area:'Diseño',
        frecuencia:'1/4',
        cumplimiento:50
    }
]
const Proyectos = () => {

    const [listado, setListado] = useState([]);

    useEffect(() => {
        const listaGuardada = JSON.parse(localStorage.getItem('listaProyectos'));
        if (listaGuardada) {
            setListado(listaGuardada);
        } else {
            setListado(listaProyectos);
        }
    }, []);

  return (
    <>
        <ModalProyectos/>
        
    </>
  )
}

export default Proyectos

