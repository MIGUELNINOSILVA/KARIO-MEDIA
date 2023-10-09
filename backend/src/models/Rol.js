import { Schema, model } from "mongoose";

const rolSchema = new Schema(
  {
    nombre: {
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
