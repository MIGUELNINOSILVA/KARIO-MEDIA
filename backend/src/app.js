import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authController from "./routes/auth.routes.js";
import rolController from "./routes/rol.routes.js";
import categoriaController from "./routes/categoria.routes.js";
import areaController from "./routes/area.routes.js";
import formulaProyectoController from "./routes/formula.proyecto.routes.js";
import proyectoController from "./routes/proyecto.routes.js";
import reporteController from "./routes/reporte.routes.js";
import ayudaController from "./routes/ayuda.routes.js";
import usuarioController from "./routes/usuario.routes.js";
import { createRoles } from "./libs/initialSetup.js"; 
import swaggerSpec from "./SwaggerConfig.js";
import swaggerUI from 'swagger-ui-express'

const app = express();

createRoles();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authController);
app.use("/api/rol", rolController);
app.use("/api/categoria", categoriaController);
app.use("/api/area", areaController);
app.use("/api/formulaProyecto", formulaProyectoController);
app.use("/api/proyecto", proyectoController);
app.use("/api/reporte", reporteController);
app.use("/api/ayuda", ayudaController);
app.use("/api/usuario", usuarioController);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

export default app;
