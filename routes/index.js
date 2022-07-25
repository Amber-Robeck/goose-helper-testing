import { Router as expressRouter } from "express";
import { router as apiRoutes } from "./api/index.js";

const router = expressRouter();

router.use('/api', apiRoutes);

router.use((_, res) => res.status(404).json('Wrong route!'));


export default router;