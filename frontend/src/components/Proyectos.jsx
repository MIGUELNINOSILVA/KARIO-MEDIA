import React, { useContext, useEffect, useState } from "react";
import ModalProyectos from "./ModalProyectos";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import {
  Box,
  ChakraProvider,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import TarjetaProyectoIndicador from "./TarjetaProyectoIndicador";
import { ProyectoContext } from "../context/ProyectoContext";

const listaProyectos = [
  {
    indicador: "Modelado 3D",
    descripcion: "descripcion del modelado 3D",
    categoria: "Agíl",
    fechaInicio: "2023/08/23",
    fechaFinal: "2023/12/15",
    formula: "Metodología Agíl",
    area: "Diseño",
    frecuencia: "1/4",
    cumplimiento: 50,
  },
];

const Proyectos = () => {
  const {proyectos} = useContext(ProyectoContext);
  const [listado, setListado] = useState([]);

  // Asigna el valor delos proyectos a la variable listado
  useEffect(() => {
    setListado(proyectos);
  }, [proyectos]);

  const nuevoElemento = (data) => {
    const nuevoProyecto = [...listado, data];
    setListado(nuevoProyecto);
    localStorage.setItem("listaProyectos", JSON.stringify(nuevoProyecto));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setListado((listado) => {
      const oldIndex = listado.findIndex((lista) => lista.indicador === active.id);
      const newIndex = listado.findIndex((lista) => lista.indicador === over.id);
      return arrayMove(listado, oldIndex, newIndex);
    });
  };
  return (
    <>
      <ModalProyectos nuevoElemento={nuevoElemento} listaProyectos={listado} />
      <div className="indicadoresDeTabla">
        <h5>Indicador</h5>
        <h5>Descripción</h5>
        <h5>Categoría</h5>
        <h5>Fecha de inicio</h5>
        <h5>Fecha de terminación</h5>
        <h5>Fórmula</h5>
        <h5>Frecuencia</h5>
        <h5>Cumplimiento</h5>
        <h5>Área</h5>
      </div>
      
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={listado} strategy={verticalListSortingStrategy}>
          {listado.map((proyecto, index) => (
            <TarjetaProyectoIndicador key={index} proyecto={proyecto} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

export default Proyectos;
