import Categoria from "../models/Categoria.js";

export const getCategorias = async (req, res) => {
  try {
    const categoria = await Categoria.find();
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}