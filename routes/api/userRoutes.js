import { Router as expressRouter } from "express";
// import { check } from "express-validator";
import { userValidation, validate } from "../../middleware/validation.js";
import { getAllUsers, createNewUser, getUserById, updateUserById, deleteUserById } from "../../controllers/userController.js";
const router = expressRouter();

//api/users endpoint

router.route('/')
    .get(getAllUsers)
    .post(userValidation, validate, createNewUser)

//api/users/:userId endpoint
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)


export { router };