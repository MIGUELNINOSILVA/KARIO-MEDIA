import React, { useEffect, useState } from 'react'
import ModalReportes from './ModalReportes'
import usu from './../assets/img/VectorUsuario.svg'
import '../assets/css/reportes.css'
import loadingImage from '../assets/img/KARIO_LOGO.png'
import '../assets/css/cargar.css'

const listaReportes = [
  {
    titulo_reporte:'Finca Galeano',
    descripcion_reporte:'asdasd'
  }
]
const Reportes = () => {
  const url = 'http://localhost:4000/api/reporte'

  const [listado, setListado] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [reportes, setReportes] = useState([])
  
  

  useEffect(() => {
    // Realiza la carga de datos aquí
    getReportes()
      .then(() => {
        setLoading(false); // Una vez que los datos se cargan, establece isLoading en false
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
        show_alerta('Error en la solicitud');
        setLoading(false); // Asegúrate de cambiar el estado incluso en caso de error
      });
  }, []);

  
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
      {isLoading ? (
      <div className="cargando" >
          <img src={loadingImage} alt="Loading" className="loading-image" />        
      </div>     
        ) : (
            <>
            </>
        )}
      <ModalReportes nuevoElemento={nuevoElemento} listaReportes={listado}/>
      <div className="papaReportes">
      {reportes.map((reporte,index)=>(
        <div key={reporte._id} className='reporteTarjeta'>
            <div className="usuarioReporte">
              <img src={usu} alt="imgUsuario" />
              <h4>Reporte</h4>
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