import { Router } from "express";

const router = Router();

import { getCategorias } from "../controllers/categoria.controller.js";

router.get("/", getCategorias);

export default router;