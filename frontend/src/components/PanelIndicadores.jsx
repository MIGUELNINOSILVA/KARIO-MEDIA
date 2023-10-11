import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
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
        Aquí puedes visualizar los indicadores propuestos y añadidios por tu
        equipo de trabajo. Si quieres ver más detalles, dale click a uno de
        ellos para más información.
      </p>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={people} strategy={verticalListSortingStrategy}>
          {people.map((user) => (
            <Indicador user={user} key={user.id} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};
