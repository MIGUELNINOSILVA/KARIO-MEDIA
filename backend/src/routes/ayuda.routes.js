import { Router } from "express";

const router = Router();

import { getAyudas } from "../controllers/ayuda.controller.js";

router.get("/", getAyudas);

export default router;
