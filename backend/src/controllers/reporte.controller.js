import Reporte from "../models/Reporte.js";

export const getReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find();
    res.json(reportes);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const getReporteById = async (req, res) => {
  try {
    const { id } = req.params;
    const reporte = await Reporte.findById(id);
    if (!reporte)
      return res.status(404).json({ message: "Reporte no encontrado" });
    res.json(reporte);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const updateReporteById = async (req, res) => {
  try {
    const { id } = req.params;
    const reporte = await Reporte.findById(id);
    if (!reporte)
      return res.status(404).json({ message: "Reporte no encontrado" });
    console.log(reporte);

    const {
      titulo_reporte,
      descripcion_reporte,
      fecha_creacion_reporte,
      id_usuario_reporte,
    } = req.body;

    reporte.titulo_reporte = titulo_reporte || reporte.titulo_reporte;
    reporte.descripcion_reporte =
      descripcion_reporte || reporte.descripcion_reporte;
    reporte.fecha_creacion_reporte =
      fecha_creacion_reporte || reporte.fecha_creacion_reporte;
    reporte.id_usuario_reporte =
      id_usuario_reporte || reporte.id_usuario_reporte;

    const updatedReporte = await reporte.save();

    res.status(200).json(updatedReporte);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const deleteReporteById = async (req, res) => {
  try {
    const { id } = req.params;
    const reporte = await Reporte.findById(id);
    if (!reporte)
      return res.status(404).json({ message: "Reporte no encontrado" });
    await Reporte.findByIdAndDelete(id);
    res.status(200).json({ message: "Reporte eliminado satisfactoriamente" });
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};
