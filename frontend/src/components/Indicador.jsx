import "./../assets/css/Indicador.css";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

export const Indicador = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: user.id,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    }
  return (
    <div
    style={style}
    ref={setNodeRef}
    {...attributes}
    {...listeners}
    className="indicador-box">
      <h1>{user.name}</h1>
      <h1>{user.name}</h1>
    </div>
  );
};
