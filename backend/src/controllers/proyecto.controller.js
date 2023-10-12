import Proyecto from "../models/Proyecto.js";

export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const getProyectoById = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findById(id);
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const updateProyectoById = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findById(id);
    if (!proyecto)
      return res.status(404).json({ message: "Proyecto no encontrado" });
    console.log(proyecto);
    const {
      indicador_proyecto,
      descripcion_proyecto,
      fecha_inicio_proyecto,
      fecha_terminacion_proyecto,
      lider_proyecto,
      id_usuario_proyecto,
      formula_proyecto,
      categoria_proyecto,
      area_proyecto,
    } = req.body;

    proyecto.indicador_proyecto =
      indicador_proyecto || proyecto.indicador_proyecto;
    proyecto.descripcion_proyecto =
      descripcion_proyecto || proyecto.descripcion_proyecto;
    proyecto.fecha_inicio_proyecto =
      fecha_inicio_proyecto || proyecto.fecha_inicio_proyecto;
    proyecto.fecha_terminacion_proyecto =
      fecha_terminacion_proyecto || proyecto.fecha_terminacion_proyecto;
    proyecto.lider_proyecto = lider_proyecto || proyecto.lider_proyecto;
    proyecto.id_usuario_proyecto =
      id_usuario_proyecto || proyecto.id_usuario_proyecto;
    proyecto.formula_proyecto = formula_proyecto || proyecto.formula_proyecto;
    proyecto.categoria_proyecto =
      categoria_proyecto || proyecto.categoria_proyecto;
    proyecto.area_proyecto = area_proyecto || proyecto.area_proyecto;

    const updatedProyecto = await proyecto.save();

    res.status(200).json(updatedProyecto);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};
