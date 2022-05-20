import { Router } from "express";
import authRouter from "./authRouter.js";
import calendarRouter from "./calendarRouter.js";
import categoryRouter from "./categoryRouter.js";
import scheduleRouter from "./scheduleRouter.js";
import serviceRouter from "./serviceRouter.js";

const router = Router();
router.use(authRouter);
router.use(categoryRouter);
router.use(serviceRouter);
router.use(calendarRouter);
router.use(scheduleRouter);

export default router;
