import { Box, ChakraProvider, CircularProgress, CircularProgressLabel, MenuIcon } from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu } from "@mui/material";
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
  
    let valor = proyecto.cumplimiento;
  return (
    <div className="proyectoTarjeta"  ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}>
      <div className="infoTarjetaProyecto">
        <p>{proyecto.indicador}</p>
        <p>{proyecto.descripcion}</p>
        <p>{proyecto.categoria}</p>
        <p>{proyecto.fechaInicio}</p>
        <p>{proyecto.fechaFinal}</p>
        <p>{proyecto.formula}</p>
        <p>{proyecto.frecuencia}</p>
        <p><ChakraProvider>
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
        </ChakraProvider></p>
        <p>{proyecto.area}</p>
      </div>
      <Menu>
        <MenuIcon style={{ margin: "5px", fontSize: "35px" }} />
      </Menu>
    </div>
  );
};

export default TarjetaProyectoIndicador;
