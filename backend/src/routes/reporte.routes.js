import { Router } from "express";

const router = Router();

import { getReportes } from "../controllers/reporte.controller.js";
import { isMember, verifyToken } from "../middlewares/authJwt.js";

router.get("/", [verifyToken], getReportes);

export default router;
