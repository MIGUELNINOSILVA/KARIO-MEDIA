import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { Indicador } from "./Indicador";

export const PanelIndicadores = () => {
  const [people, setPeople] = useState([
    {
      name: "John",
      id: 1,
    },
    {
      name: "Peter",
      id: 2,
    },
    {
      name: "Sue",
      id: 3,
    },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    setPeople((people) => {
      const oldIndex = people.findIndex((person) => person.id === active.id);
      const newIndex = people.findIndex((person) => person.id === over.id);
      return arrayMove(people, oldIndex, newIndex);
    });
  };

  return (
    <>
      <h1>Panel de indicadores</h1>
      <p>
        Aquí puedes visualizar los indicadores propuestos y añadidos por tu
        equipo de trabajo. Si quieres ver más detalles, haz clic en uno de ellos
        para obtener más información.
      </p>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <table className="table">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Terminación</th>
              <th>Fórmula</th>
              <th>Frecuencia</th>
              <th>Cumplimiento</th>
              <th>Área</th>
            </tr>
          </thead>
          <tbody>
            <SortableContext
              items={people}
              strategy={verticalListSortingStrategy}
            >
              {people.map((user) => (
                <Indicador user={user} key={user.id} id={user.id} />
              ))}
            </SortableContext>
          </tbody>
        </table>
      </DndContext>
    </>
  );
};
