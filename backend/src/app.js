import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authController from "./routes/auth.routes.js";
import rolController from "./routes/rol.routes.js";
import { createRoles } from "./libs/initialSetup.js";

const app = express();

createRoles();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authController);
app.use("/api/rol", rolController);

export default app;
