import Proyecto from "../models/Proyecto.js";

export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    })
  }
}

