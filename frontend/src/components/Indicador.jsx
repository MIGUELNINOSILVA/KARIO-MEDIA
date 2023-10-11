import { useSortable } from "@dnd-kit/sortable";
import MenuIcon from '@mui/icons-material/Menu';

export const Indicador = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: user.id,
    });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="indicador-box"
    >
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td>{user.name}</td>
      <td><MenuIcon /></td>
    </tr>
  );
};
