import React, { useEffect, useState } from 'react'
import usu from './../assets/img/VectorUsuario.svg'
import ModalAyuda from '../components/ModalAyuda'



const Ayudas = () => {

    const url = 'http://localhost:4000/api/ayuda'

  const [listado, setListado] = useState([]);

  const [ayudas, setAyudas] = useState([])
  
  

  
    const getAyudas = async () => {
        try {
        const respuesta = await fetch(url);
        
        const datos = await respuesta.json();
        console.log(datos);
        setAyudas(datos)
        
        } catch (error) {
        console.error('Error en la solicitud:', error);
        }
    }
    
    useEffect(()=>{
        getAyudas()
    },[])



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

    const ListaDeAyudas = [];

    return (
        <>
        <ModalAyuda nuevoElemento={nuevoElemento} ListaDeAyudas={listado} />
            {ayudas.map((ayuda, index) => (
                <div key={ayuda._id} className='ayudaTarjeta'>
                    <div className='usuarioAyuda'>
                    {ayuda.id_usuario_ayuda && ayuda.id_usuario_ayuda.imagen && (
                    <img
                        src={ayuda.id_usuario_ayuda.imagen}
                        alt="imgUsuario"
                        style={{width:"80px", height:"70px", "border-radius": "40%"}}
                    />
                    )}
                    <h4>{ayuda.id_usuario_ayuda && ayuda.id_usuario_ayuda.nombre_usuario
                    ? ayuda.id_usuario_ayuda.nombre_usuario
                    : 'Usuario Desconocido'}</h4>
                    </div>
                    <div className='infoAyuda'>
                        <label htmlFor="descripcion">{ayuda.titulo_ayuda}</label>
                        <input type="text" value={ayuda.descripcion_ayuda} readOnly/>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Ayudas
