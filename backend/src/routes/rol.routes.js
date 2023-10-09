import { Router } from "express";
const router = Router();

import { getRoles } from "../controllers/rol.controller.js";
import { verifyToken } from "../middlewares/authJwt.js";

router.get("/", verifyToken, getRoles);

export default router;
