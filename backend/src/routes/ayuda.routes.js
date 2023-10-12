import { Router } from "express";

const router = Router();

import {
  createAyuda,
  deleteAyudaById,
  getAyudaById,
  getAyudas,
  updateAyudaById,
} from "../controllers/ayuda.controller.js";
import { isAdminOrEmpleado, verifyToken } from "../middlewares/authJwt.js";

router.get("/", getAyudas);
router.post("/", [verifyToken, isAdminOrEmpleado], createAyuda);
router.get("/:id", getAyudaById);
router.patch("/:id", [verifyToken, isAdminOrEmpleado], updateAyudaById);
router.delete("/:id", [verifyToken, isAdminOrEmpleado], deleteAyudaById);

export default router;
