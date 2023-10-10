import { Schema, model } from "mongoose";

const rolSchema = new Schema(
  {
    nombre_rol: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Rol", rolSchema);
