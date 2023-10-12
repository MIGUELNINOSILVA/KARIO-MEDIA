import {
  Box,
  ChakraProvider,
  CircularProgress,
  CircularProgressLabel,
  MenuIcon,
} from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

const TarjetaProyectoIndicador = ({ proyecto }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: proyecto.indicador,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let valor = proyecto.cumplimiento_proyecto;

  const fecha_inicio_proyecto = new Date(
    proyecto.fecha_inicio_proyecto
  ).toLocaleDateString();
  const fecha_terminacion_proyecto = new Date(
    proyecto.fecha_terminacion_proyecto
  ).toLocaleDateString();
  return (
    <div
      className="proyectoTarjeta"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="infoTarjetaProyecto">
        <p>{proyecto.indicador_proyecto}</p>
        <p>{proyecto.descripcion_proyecto}</p>
        <p>{proyecto.categoria_proyecto.nombre_categoria}</p>
        <p>{fecha_inicio_proyecto}</p>
        <p>{fecha_terminacion_proyecto}</p>
        <p>{proyecto.formula_proyecto.nombre_formula}</p>
        <p>{proyecto.frecuencia_proyecto}</p>
        <p>
          <ChakraProvider>
            <Box>
              <CircularProgress
                value={valor}
                color={
                  valor > 0 && valor < 40
                    ? "red"
                    : valor >= 40 && valor < 80
                    ? "orange"
                    : valor >= 80
                    ? "#00ff40"
                    : ""
                }
                size="40px"
                thickness="12px"
              >
                <CircularProgressLabel>{valor}%</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </ChakraProvider>
        </p>
        <p>{proyecto.area_proyecto.nombre_area}</p>
      </div>
        <MenuIcon style={{margin:'0 5px'}}/>
    </div>
  );
};

export default TarjetaProyectoIndicador;
