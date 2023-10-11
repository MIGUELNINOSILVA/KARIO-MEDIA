import React, { useEffect, useState } from 'react'
import ModalProyectos from './ModalProyectos';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
        }
    }, []);

    const nuevoElemento = (data) =>{
        const nuevoProyecto = [...listado, data];
        setListado(nuevoProyecto);
        localStorage.setItem('listaProyectos',JSON.stringify(nuevoProyecto));
    }
  return (
    <>
        <ModalProyectos nuevoElemento={nuevoElemento} listaProyectos={listado} />
        {listado.map((proyecto,index)=>(
            <div className="proyectoTarjeta" key={index}>
                <div className='infoTarjetaProyecto'>
                    <p>{proyecto.indicador}</p>
                    <p>{proyecto.descripcion}</p>
                    <p>{proyecto.categoria}</p>
                    <p>{proyecto.fechaInicio}</p>
                    <p>{proyecto.fechaFinal}</p>
                    <p>{proyecto.formula}</p>
                    <p>{proyecto.frecuencia}</p>
                    <p>{proyecto.cumplimiento}</p>
                    <p>{proyecto.area}</p>
                </div>
                <MenuIcon  style={{margin:'5px',fontSize:'35px'}}/>
            </div>
        ))}        
    </>
  )
}

export default Proyectos

