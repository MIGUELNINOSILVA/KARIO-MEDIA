import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema = new Schema(
  {
    nombre_usuario: {
      type: String,
      unique: false,
      required: [true, "El nombre de usuario es obligatorio"],
    },
    imagen: {
      type: String,
      unique: false,
      required: false,
    },
    correo: {
      type: String,
      unique: [true, "El correo ya existe"],
      required: [true, "El correo es obligatorio"],
    },
    contraseña: {
      type: String,
      unique: false,
      required: [true, "La contraseña es obligatoria"],
    },
    rol: [
      {
        ref: "Rol",
        type: Schema.Types.ObjectId
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

usuarioSchema.statics.encryptPassword = async (contraseña) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(contraseña, salt);
}
usuarioSchema.statics.comparePassword = async (contraseña, receivedPassword) => {
  return await bcrypt.compare(contraseña, receivedPassword);
}

export default model("Usuario", usuarioSchema);
