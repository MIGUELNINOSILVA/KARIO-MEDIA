import { Router } from "express";

const router = Router();

import { getReportes } from "../controllers/reporte.controller.js";
import { isMember, verifyToken } from "../middlewares/authJwt.js";

router.get("/", [verifyToken, isMember], getReportes);

export default router;
