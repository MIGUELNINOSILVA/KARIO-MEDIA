import Rol from "../models/Rol.js";

export const createRoles = async () => {
  try {
    const count = await Rol.estimatedDocumentCount();
    if (count > 0) return;

    const values = await Promise.all([
      new Rol({ nombre: "Administrador" }).save(),
      new Rol({ nombre: "Empleado" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error(error);
  }
};
