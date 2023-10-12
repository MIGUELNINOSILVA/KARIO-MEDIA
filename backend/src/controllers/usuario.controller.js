import Usuario from "../models/Usuario.js";

export const getUsuarios = async(req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const {
      nombre_usuario,
      imagen,
      correo,
      contraseña,
      rol,
    } = req.body;

    usuario.nombre_usuario = nombre_usuario || usuario.nombre_usuario;
    usuario.imagen = imagen || "";
    usuario.correo = correo || usuario.correo;
    if(contraseña){
      usuario.contraseña = await Usuario.encryptPassword(contraseña);
    }
    usuario.rol = rol || usuario.rol;

    const updatedUser = await usuario.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
