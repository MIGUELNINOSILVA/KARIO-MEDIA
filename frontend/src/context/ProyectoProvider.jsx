import { useEffect, useState } from 'react'
import {ProyectoContext} from './ProyectoContext'

const ProyectoProvider = ({children}) => {
  // Variables
  const [proyectos, setProyectos] = useState([]);

  // Funciones
  const fetchProyectos = async () => {
    const response = await fetch('http://localhost:4000/api/proyecto');
    const data  = await response.json();
    setProyectos(data);
  }

  // Hooks
  useEffect(() => {
    fetchProyectos();
  }, []);

  // Retorno
  const proyecto = {
    proyectos
  }

  return (
    <ProyectoContext.Provider value={proyecto}>
      {children}
    </ProyectoContext.Provider>
  )
}

export default ProyectoProvider
