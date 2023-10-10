import { Schema, model } from "mongoose";

const categoriaSchema = new Schema({
  nombre_categoria: {
    type: String,
    unique: true,
  },
});

export default model("Categoria", categoriaSchema);
