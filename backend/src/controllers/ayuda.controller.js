import Ayuda from "../models/Ayuda.js";

export const getAyudas = async(req, res)=>{
  try {
    const ayuda = await Ayuda.find();
    res.json(ayuda);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    });
  }
}