import { Router } from "express";
const router = Router();

import { signIn, signUp } from "../controllers/auth.controller.js";
import { isMember } from "../middlewares/authJwt.js";

router.post("/signup", signUp);
router.post("/signin", [isMember], signIn);

export default router;
