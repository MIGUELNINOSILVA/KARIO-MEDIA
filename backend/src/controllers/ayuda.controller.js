import Ayuda from "../models/Ayuda.js";

export const getAyudas = async (req, res) => {
  try {
    const ayuda = await Ayuda.find();
    res.json(ayuda);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const getAyudaById = async (req, res) => {
  try {
    const { id } = req.params;
    const ayuda = await Ayuda.findById(id);
    if (!ayuda) return res.status(404).json({ message: "Ayuda no encontrado" });
    res.json(ayuda);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const updateAyudaById = async (req, res) => {
  try {
    const { id } = req.params;
    const ayuda = await Ayuda.findById(id);
    if (!ayuda) return res.status(404).json({ message: "Ayuda no encontrado" });
    console.log(ayuda);
    const {
      titulo_ayuda,
      descripcion_ayuda,
      fecha_creacion_ayuda,
      id_usuario_ayuda,
    } = req.body;
    ayuda.titulo_ayuda = titulo_ayuda || ayuda.titulo_ayuda;
    ayuda.descripcion_ayuda = descripcion_ayuda || ayuda.descripcion_ayuda;
    ayuda.fecha_creacion_ayuda =
      fecha_creacion_ayuda || ayuda.fecha_creacion_ayuda;
    ayuda.id_usuario_ayuda = id_usuario_ayuda || ayuda.id_usuario_ayuda;
    const updatedAyuda = await ayuda.save();
    res.status(200).json(updatedAyuda);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
};

export const deleteAyudaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ayuda.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).json({ message: "Ayuda eliminado" });
    }
    throw new Error("Ayuda no encontrado");
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
}

export const createAyuda = async(req, res)=>{
  try {
    const { titulo_ayuda, descripcion_ayuda, id_usuario_ayuda } = req.body;
    const newAyuda = new Ayuda({ titulo_ayuda, descripcion_ayuda, id_usuario_ayuda });
    const savedAyuda = await newAyuda.save();
    res.status(201).json(savedAyuda);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
}
