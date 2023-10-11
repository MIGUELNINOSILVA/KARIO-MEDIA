import { Router } from "express";

const router = Router();

import { getReportes } from "../controllers/reporte.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", [verifyToken, isAdminOrEmpleado], getReportes);

export default router;
