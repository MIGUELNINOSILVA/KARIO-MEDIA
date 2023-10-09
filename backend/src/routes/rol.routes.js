import { Router } from "express";
const router = Router();

import { getRoles } from "../controllers/rol.controller.js";

router.get("/", getRoles);

export default router;
