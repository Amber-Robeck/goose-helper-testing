import { Router as expressRouter } from "express";

const router = expressRouter();

router.get('/', (req, res) => {
    res.send("Hello World!");
})

export default router;