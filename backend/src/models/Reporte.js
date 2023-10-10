import { Schema, model } from "mongoose";

const reporteSchema = new Schema({
  titulo_reporte: {
    type: String,
    unique: false,
    required: [true, "El titulo del reporte es obligatorio"],
  },
  descripcion_reporte: {
    type: String,
    unique: false,
    required: [true, "La descripcion del reporte es obligatoria"],
  },
  fecha_creacion_reporte: {
    type: Date,
    default: Date.now,
  },
  id_proyecto_asociado: {
    ref: "Proyecto",
    type: Schema.Types.ObjectId,
  },
  id_usuario_reporte: {
    ref: "Usuario",
    type: Schema.Types.ObjectId,
  },
});

export default model("Reporte", reporteSchema);