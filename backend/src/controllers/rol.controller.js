import Rol from "./../models/Rol.js";

export const getRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los roles",
      error,
    });
  }
};
