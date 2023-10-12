import { Router } from "express";

const router = Router();

import {
  deleteProyectoById,
  getProyectoById,
  getProyectos,
  updateProyectoById,
} from "../controllers/proyecto.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", getProyectos);
router.get("/", getProyectoById);
router.patch("/:id", [verifyToken, isAdminOrEmpleado], updateProyectoById);
router.delete("/:id", [verifyToken, isAdminOrEmpleado], deleteProyectoById);

export default router;
