import { Router } from "express";

const router = Router();

import getAreas from "../controllers/area.controller.js";

router.get("/", getAreas);



export default router;