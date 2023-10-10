import { Router } from "express";
const router = Router();

import { getRoles } from "../controllers/rol.controller.js";
import { verifyToken, isAdmin } from "../middlewares/authJwt.js";

router.get("/", [verifyToken, isAdmin], getRoles);

export default router;
