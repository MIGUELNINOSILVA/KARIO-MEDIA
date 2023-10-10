import { Router } from "express";

const router = Router();

import { getFormulaProyectos } from "../controllers/formula.proyecto.controller.js";

router.get("/", getFormulaProyectos);

export default router;