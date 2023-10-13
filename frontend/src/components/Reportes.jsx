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
  const urlPost = 'http://localhost:4000/api/reporte/post'

  const [listado, setListado] = useState([]);

  const [reportes, setReportes] = useState([])
  
  const user = JSON.parse(localStorage.getItem("user-data"));
  console.log("user");
  console.log(user.user._id);
  
  
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

  const postReporte = async (data)=>{
    try {
      const token = JSON.parse(localStorage.getItem("user-token"));
      const response = await fetch(urlPost,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          "x-access-token": token,
        },
        body: JSON.stringify(data)
      });

      if(response.ok){
        const nuevoReporte = await response.json();
        setReportes([...reportes,nuevoReporte])
      }else{
        console.error('Error al crear un nuevo componente:',response.status)
      }
    } catch (error) {
      console.error('Error en la solicitud',error)
    }
  }

  return (
    <>
      <ModalReportes nuevoElemento={postReporte} listaReportes={listado} setMiFuncion={setMiFuncion} postReporte={postReporte}/>
      <div className="papaReportes">
      {reportes.map((reporte,index)=>(
        <div key={reporte._id} className='reporteTarjeta'>
            <div className="usuarioReporte">
            {reporte.id_usuario_reporte && reporte.id_usuario_reporte.imagen && (
              <img
                src={reporte.id_usuario_reporte.imagen}
                alt="imgUsuario"
                style={{width:"80px", height:"80px", "border-radius": "50%"}}
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