import React, { useContext, useEffect, useState } from "react";
import usu from "./../assets/img/VectorUsuario.svg";
import ModalAyuda from "../components/ModalAyuda";
import { AyudaContext } from "../context/AyudaContext";
import { useNavigate } from "react-router-dom";

export const ListaDeAyudas = [
  {
    titulo: "Titulo de la ayuda",
    descripcion: "Aqui va la descripcion de la ayuda",
    creador: "UsuarioX",
    fecha: "2023/04/19",
  },
  {
    titulo: "Titulo de la ayuda",
    descripcion: "Aqui va la descripcion de la ayuda",
    creador: "UsuarioX",
    fecha: "2023/04/19",
  },
  {
    titulo: "Titulo de la ayuda",
    descripcion: "Aqui va la descripcion de la ayuda",
    creador: "UsuarioX",
    fecha: "2023/04/19",
  },
  {
    titulo: "Titulo de la ayuda",
    descripcion: "Aqui va la descripcion de la ayuda",
    creador: "UsuarioX",
    fecha: "2023/04/19",
  },
];

const Ayudas = ({ setMiFuncion }) => {
  const [listado, setListado] = useState([]);

  const [ayudas, setAyudas] = useState([]);

  const user = JSON.parse(localStorage.getItem("user-data"));
  console.log("user");
  console.log(user.user._id);

  const { agregarAyudas } = useContext(AyudaContext);

  //   useEffect(() => {
  //     const listaGuardada = JSON.parse(localStorage.getItem("listaDeAyudas"));
  //     if (listaGuardada) {
  //       setListado(listaGuardada);
  //     } else {
  //       setListado(ListaDeAyudas);
  //     }
  //   }, []);

  const nuevoElemento = async (data) => {
    console.log(data.titulo);
    console.log(data.descripcion);
    console.log(user.user._id);
    await agregarAyudas(data.titulo, data.descripcion, user.user._id);
    const navigate = useNavigate();
    navigate("/kario");
  };

  const { ayudasData } = useContext(AyudaContext);

  useEffect(() => {
    setAyudas(ayudasData);
  }, [ayudasData]);

  return (
    <>
      <ModalAyuda
        nuevoElemento={nuevoElemento}
        ListaDeAyudas={listado}
        setMiFuncion={setMiFuncion}
      />
      {ayudas.map((ayuda, index) => (
        <div key={ayuda._id} className="ayudaTarjeta">
          <div className="usuarioAyuda">
            {ayuda.id_usuario_ayuda && ayuda.id_usuario_ayuda.imagen && (
              <img
                src={ayuda.id_usuario_ayuda.imagen}
                alt="imgUsuario"
                style={{
                  width: "80px",
                  height: "70px",
                  "border-radius": "40%",
                }}
              />
            )}
            <h4>
              {ayuda.id_usuario_ayuda && ayuda.id_usuario_ayuda.nombre_usuario
                ? ayuda.id_usuario_ayuda.nombre_usuario
                : "Usuario Desconocido"}
            </h4>
          </div>
          <div className="infoAyuda">
            <label htmlFor="descripcion">{ayuda.titulo_ayuda}</label>
            <input type="text" value={ayuda.descripcion_ayuda} readOnly />
          </div>
        </div>
      ))}
    </>
  );
};

export default Ayudas;
