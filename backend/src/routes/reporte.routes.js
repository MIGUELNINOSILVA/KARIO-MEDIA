import { Router } from "express";

const router = Router();

import {
  createReporte,
  deleteReporteById,
  getReporteById,
  getReportes,
  updateReporteById,
} from "../controllers/reporte.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", getReportes);
router.post("/post", [verifyToken, isAdminOrEmpleado],createReporte);
router.get("/:id", getReporteById);
router.patch("/patch/:id", [verifyToken, isAdminOrEmpleado], updateReporteById);
router.delete("/del/:id", [verifyToken, isAdminOrEmpleado], deleteReporteById);

export default router;
