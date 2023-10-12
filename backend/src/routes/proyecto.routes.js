import { Router } from "express";

const router = Router();

import { getProyectoById, getProyectos, updateProyectoById } from "../controllers/proyecto.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/",getProyectos);
router.get("/",getProyectoById);
router.patch("/:id",[verifyToken, isAdminOrEmpleado], updateProyectoById);

export default router;
