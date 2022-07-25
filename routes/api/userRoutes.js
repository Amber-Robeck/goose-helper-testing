import { Router as expressRouter } from "express";
import { getAllUsers } from "../../controllers/userController.js";
const router = expressRouter();

//api/users endpoint

router.route('/')
    .get(getAllUsers)


export { router };