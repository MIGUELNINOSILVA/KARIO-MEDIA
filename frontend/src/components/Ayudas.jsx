import React from 'react'
import usu from './../assets/img/VectorUsuario.svg'


const ListaDeAyudas = [
    {
        titulo:'Titulo de la ayuda',
        descripcion:'Aqui va la descripcion de la ayuda',
        creador:'UsuarioX',
        fecha:'2023/04/19'
    },
    {
        titulo:'Titulo de la ayuda',
        descripcion:'Aqui va la descripcion de la ayuda',
        creador:'UsuarioX',
        fecha:'2023/04/19'
    },
    {
        titulo:'Titulo de la ayuda',
        descripcion:'Aqui va la descripcion de la ayuda',
        creador:'UsuarioX',
        fecha:'2023/04/19'
    },
    {
        titulo:'Titulo de la ayuda',
        descripcion:'Aqui va la descripcion de la ayuda',
        creador:'UsuarioX',
        fecha:'2023/04/19'
    }
]
const Ayudas = () => {

    

    return (
        <>
            {ListaDeAyudas.map((ayuda, index) => (
                <div key={index} className='ayudaTarjeta'>
                    <div className='usuarioAyuda'>
                        <img src={usu} alt="..." />
                        <h4>{ayuda.creador}</h4>
                    </div>
                    <div className='infoAyuda'>
                        <label htmlFor="descripcion">{ayuda.titulo}</label>
                        <input type="text" value={ayuda.descripcion} readOnly/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Ayudas
