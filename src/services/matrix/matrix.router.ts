import { Router } from "express";
import matrixController from "./matrix.controller";

const router = Router();

router.get('/matrix', matrixController.showMatrix);

export default router;