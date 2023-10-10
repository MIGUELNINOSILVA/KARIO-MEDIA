import React, { useEffect, useState } from 'react'
import usu from './../assets/img/VectorUsuario.svg'
import ModalAyuda from '../components/ModalAyuda'


export const ListaDeAyudas = [
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

    const [listado, setListado] = useState([])

    useEffect(() => {
        const listaGuardada = JSON.parse(localStorage.getItem('listaDeAyudas'));
        if (listaGuardada) {
            setListado(listaGuardada);
        } else {
            setListado(ListaDeAyudas);
        }
    }, []);
    
    const nuevoElemento = (data) => {
        const nuevaLista = [...listado, data];
        setListado(nuevaLista);
        localStorage.setItem('listaDeAyudas', JSON.stringify(nuevaLista));
    };

    return (
        <>
        <ModalAyuda nuevoElemento={nuevoElemento} ListaDeAyudas={listado} />
            {listado.map((ayuda, index) => (
                <div key={index} className='ayudaTarjeta'>
                    <div className='usuarioAyuda'>
                        <img src={usu} alt="..." />
                        <h4>Usuario X</h4>
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
