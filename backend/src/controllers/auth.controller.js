import Usuario from "./../models/Usuario.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { nombre_usuario, correo, contraseña, rol } = req.body;

    const newUsuario = new Usuario({
      nombre_usuario,
      correo,
      contraseña: await Usuario.encryptPassword(contraseña),
      rol: rol ? rol : "65243b204bf01c816d9383a6",
    });

    const savedUser = await newUsuario.save();

    const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
      expiresIn: 86400, //24 horas
    });

    res
      .status(200)
      .json({ message: "Usuario creado correctamente", token, savedUser });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error,
    });
  }
};
export const signIn = async (req, res) => {
  try {
    const user = await Usuario.findOne({ correo: req.body.correo }).populate(
      "rol"
    );
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const matchPassword = await Usuario.comparePassword(
      req.body.contraseña,
      user.contraseña
    );
    if (!matchPassword)
      return res
        .status(401)
        .json({ token: null, message: "Contraseña incorrecta" });
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 86400, //24 horas
    });

    res
      .status(200)
      .json({ message: "Usuario encontrado", tokenuser: token, user });
  } catch (error) {
    res.status(500).json({
      message: "Error al iniciar sesión",
      error,
    });
  }
};
