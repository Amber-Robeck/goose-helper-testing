import { Router as expressRouter } from "express";
import { getAllUsers, createNewUser, getUserById, updateUserById, deleteUserById } from "../../controllers/userController.js";
const router = expressRouter();

//api/users endpoint

router.route('/')
    .get(getAllUsers)
    .post(createNewUser)

//api/users/:userId endpoint
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)


export { router };