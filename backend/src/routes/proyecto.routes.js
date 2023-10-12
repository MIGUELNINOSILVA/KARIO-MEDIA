import { Router } from "express";

const router = Router();

import {
  createProyecto,
  deleteProyectoById,
  getProyectoById,
  getProyectos,
  updateProyectoById,
} from "../controllers/proyecto.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", getProyectos);
router.post("/post", [verifyToken, isAdminOrEmpleado], createProyecto);
router.get("/:id", getProyectoById);
router.patch("/patch/:id", [verifyToken, isAdminOrEmpleado], updateProyectoById);
router.delete("/del/:id", [verifyToken, isAdminOrEmpleado], deleteProyectoById);

export default router;
