import FormulaProyecto from "../models/FormulaProyecto.js";

export const getFormulaProyectos = async (req, res) => {
  try {
    const formulaProyectos = await FormulaProyecto.find();
    res.json(formulaProyectos);
  } catch (error) {
    res.status(500).json({
      message: "Error",
    })
  }
}