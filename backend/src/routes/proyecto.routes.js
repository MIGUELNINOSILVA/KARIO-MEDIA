import { Router } from "express";

const router = Router();

import { getProyectos } from "../controllers/proyecto.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", [verifyToken, isAdminOrEmpleado], getProyectos);

router.get("/", getProyectos);

export default router;
