import { Schema, model } from "mongoose";

const formulaProyectoSchema = new Schema({
  nombre_formula: {
    type: String,
    unique: true,
  },
});

export default model("FormulaProyecto", formulaProyectoSchema);
