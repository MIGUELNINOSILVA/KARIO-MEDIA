import { Router } from "express";
import { getFormulaProyectos } from "../controllers/formula.proyecto.controller.js";

const router = Router();

router.get("/", getFormulaProyectos);

export default router;
