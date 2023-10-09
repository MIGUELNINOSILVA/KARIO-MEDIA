import Usuario from "./../models/Usuario.js";

export const signUp = async (req, res) => {
  try {
    const {nombre_usuario, correo, contraseña, rol} = req.body;

    const newUsuario = new Usuario({
      nombre_usuario,
      correo,
      contraseña: await Usuario.encryptPassword(contraseña),
    });

    console.log(newUsuario);

  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error
    });
  }
};
export const signIn = async (req, res) => {
  res.json("SignIn");
};