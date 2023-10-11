import { useSortable } from "@dnd-kit/sortable";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  ChakraProvider,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import "./../assets/css/Indicador.css";

export const Indicador = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: user.id,
    });

  const style = {
    transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
    transition,
  };

  // Establece estilos en línea para aplicar colores
  const cellStyle = {
    backgroundColor: "white", // Cambia esto al color de fondo deseado
    color: "black", // Cambia esto al color de texto deseado
  };

  let valor = 55;

  return (
    <tr
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="td-indicador"
    >
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>
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
      </td>
      <td style={cellStyle}>{user.name}</td>
      <td style={cellStyle}>
        <MenuIcon />
      </td>
    </tr>
  );
};
