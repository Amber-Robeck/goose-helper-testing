import { Router as expressRouter } from "express";
const router = expressRouter();
import { router as userRoutes } from "./userRoutes.js";

router.use('/users', userRoutes);

export { router };