import { Router } from "express";
import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRouter.js";
import serviceRouter from "./serviceRouter.js";

const router = Router();
router.use(authRouter);
router.use(categoryRouter);
router.use(serviceRouter);

export default router;
