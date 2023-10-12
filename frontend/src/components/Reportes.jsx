import React, { useEffect, useState } from 'react'
import ModalReportes from './ModalReportes'
import '../assets/css/reportes.css'

const listaReportes = [
  {
    titulo_reporte:'Finca Galeano',
    descripcion_reporte:'asdasd'
  }
]
const Reportes = ({setMiFuncion}) => {

  const url = 'http://localhost:4000/api/reporte'

  const [listado, setListado] = useState([]);

  const [reportes, setReportes] = useState([])
  
  

  
const getReportes = async () => {
    try {
      const respuesta = await fetch(url);
      
      const datos = await respuesta.json();
      console.log(datos);
      setReportes(datos)
      
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  useEffect(()=>{
    getReportes()
},[])



  useEffect(()=>{
    const listaGuardada = JSON.parse(localStorage.getItem('listaReportes'));
    listaGuardada ? setListado(listaGuardada) : setListado(listaReportes);
  },[]);

  const nuevoElemento = (data) =>{
    const nuevaLista = [...listado,data];
    console.log(nuevaLista);
    setListado(nuevaLista);
    localStorage.setItem('listaReportes',JSON.stringify(nuevaLista));
  };

  return (
    <>
      <ModalReportes nuevoElemento={nuevoElemento} listaReportes={listado} setMiFuncion={setMiFuncion}/>
      <div className="papaReportes">
      {reportes.map((reporte,index)=>(
        <div key={reporte._id} className='reporteTarjeta'>
            <div className="usuarioReporte">
            {reporte.id_usuario_reporte && reporte.id_usuario_reporte.imagen && (
              <img
                src={reporte.id_usuario_reporte.imagen}
                alt="imgUsuario"
                style={{width:"100px", height:"70px", "border-radius": "40%"}}
              />
            )}
              <h4>{reporte.id_usuario_reporte && reporte.id_usuario_reporte.nombre_usuario
          ? reporte.id_usuario_reporte.nombre_usuario
          : 'Usuario Desconocido'}</h4>
            </div>
            <div className="infoReporte">
                <label htmlFor="descripcionReporte">{reporte.titulo_reporte}</label>
                <div >
                    {reporte.descripcion_reporte}
                </div>
            </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default Reportes