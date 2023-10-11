import { Router } from "express";

const router = Router();

import { getProyectos } from "../controllers/proyecto.controller.js";
import { isMember, verifyToken } from "../middlewares/authJwt.js";

router.get("/", [verifyToken, isMember], getProyectos);

router.get("/", getProyectos);

export default router;
