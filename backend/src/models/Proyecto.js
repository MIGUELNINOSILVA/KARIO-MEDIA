import { Schema, model } from "mongoose";

const proyectoSchema = new Schema(
  {
    indicador_proyecto: {
      type: String,
      unique: true,
    },
    descripcion_proyecto: {
      type: String,
    },
    fecha_inicio_proyecto: {
      type: Date,
      default: Date.now,
    },
    fecha_terminacion_proyecto: {
      type: Date,
      default: Date.now,
    },
    lider_proyecto: {
      ref: "Usuario",
      type: Schema.Types.ObjectId,
    },
    id_usuario_proyecto: {
      ref: "Usuario",
      type: Schema.Types.ObjectId,
    },
    formula_proyecto: {
      ref: "FormulaProyecto",
      type: Schema.Types.ObjectId,
    },
    categoria_proyecto: {
      ref: "Categoria",
      type: Schema.Types.ObjectId,
    },
    area_proyecto: {
      ref: "Area",
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Proyecto", proyectoSchema);
