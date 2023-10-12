import React, { useEffect, useState } from 'react'
import ModalReportes from './ModalReportes'
import usu from './../assets/img/VectorUsuario.svg'
import '../assets/css/reportes.css'

const listaReportes = [
  {
    titulo_reporte:'Finca Galeano',
    descripcion_reporte:'asdasd'
  }
]
const Reportes = () => {

  const [listado, setListado] = useState([]);

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
      <ModalReportes nuevoElemento={nuevoElemento} listaReportes={listado}/>
      <div className="papaReportes">
      {listado.map((reporte,index)=>(
        <div key={index} className='reporteTarjeta'>
            <div className="usuarioReporte">
              <img src={usu} alt="imgUsuario" />
              <h4>Usuario X</h4>
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