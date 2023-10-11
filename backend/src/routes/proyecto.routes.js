import { Router } from "express";

const router = Router();

import { getProyectos } from "../controllers/proyecto.controller.js";

router.get("/", getProyectos);

export default router;