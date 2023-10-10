import { Schema, model } from "mongoose";

const ayudaSchema = new Schema({
  titulo_ayuda: {
    type: String,
    unique: false,
    required: [true, "El titulo de la ayuda es obligatorio"],
  },
  descripcion_ayuda: {
    type: String,
    unique: false,
    required: [true, "La descripcion de la ayuda es obligatoria"],
  },
  fecha_creacion_ayuda: {
    type: Date,
    default: Date.now,
  },
  id_usuario_ayuda: {
    ref: "Usuario",
    type: Schema.Types.ObjectId,
  },
});

export default model("Ayuda", ayudaSchema);
