import { Router as expressRouter } from "express";
import { getAllUsers, createNewUser } from "../../controllers/userController.js";
const router = expressRouter();

//api/users endpoint

router.route('/')
    .get(getAllUsers)
    .post(createNewUser)


export { router };