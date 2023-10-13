import { Schema, model } from "mongoose";

const areaSchema = new Schema({
  nombre_area: {
    type: String,
    unique: true,
  },
});

export default model("Area", areaSchema);
