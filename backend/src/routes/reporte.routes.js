import { Router } from "express";

const router = Router();

import {
  deleteReporteById,
  getReporteById,
  getReportes,
  updateReporteById,
} from "../controllers/reporte.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", getReportes);
router.get("/:id", getReporteById);
router.patch("/:id", [verifyToken, isAdminOrEmpleado], updateReporteById);
router.delete("/:id", [verifyToken, isAdminOrEmpleado], deleteReporteById);

export default router;
