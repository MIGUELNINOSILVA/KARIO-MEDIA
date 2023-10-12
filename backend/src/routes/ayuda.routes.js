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
router.post("/post", [verifyToken, isAdminOrEmpleado], createAyuda);
router.get("/:id", getAyudaById);
router.patch("/patch/:id", [verifyToken, isAdminOrEmpleado], updateAyudaById);
router.delete("/del/:id", [verifyToken, isAdminOrEmpleado], deleteAyudaById);

export default router;
