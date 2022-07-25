import { Router as expressRouter } from "express";
import User from "../models/User.js";
import { getAllUsers } from "../controllers/userController.js";

const router = expressRouter();

router.get('/', (req, res) => {
    res.send("Hello World!");
})

router.post('/signup', (req, res) => {
    const { userName, password, email } = req.body;
    const user = new User({ userName, password, email });
    user.save()
        .then(() => res.send({ message: "User created!", data: user }))
        .catch(err => res.send(err));

})

router.route('/users')
    .get(getAllUsers)

export default router;