import { Router } from "express";
import { getUsuario, getUsuarios, updateUsuario } from "../controllers/usuario.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

const router = Router();

router.get("/", [verifyToken, isAdminOrEmpleado],getUsuarios);
router.get("/:id", [verifyToken],getUsuario);
router.patch("/:id", [verifyToken], updateUsuario);

export default router;