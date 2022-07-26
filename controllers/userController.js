import User from "../models/User.js";
import gooseHelper from "goose-helper";
import e from "express";

function getAllUsers(req, res) {
    gooseHelper(req, res, User.find({}));
};

function createNewUser(req, res) {
    gooseHelper(req, res, User.create(req.body), "Unable to complete request.", "User created successfully!");
};

function getUserById(req, res) {
    gooseHelper(req, res, User.findById(req.params.userId));
};

function updateUserById(req, res) {
    gooseHelper(req, res, User.findByIdAndUpdate(req.params.userId, req.body), "Unable to complete request.", "User updated successfully!");
};

function deleteUserById(req, res) {
    gooseHelper(req, res, User.findByIdAndDelete(req.params.userId), "Unable to complete request.", "User deleted successfully!");
};

async function signIn(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide both email and password."
        });
    }
    const userData = await User.findOne({ email })
    if (!userData) {
        return res.status(400).json({
            message: "Invalid email or password."
        });
    }
    const isValid = await userData.checkPassword(password);
    if (!isValid) {
        return res.status(400).json({
            message: "Invalid email or password."
        });
    } else {
        return res.status(200).json({
            message: "Sign in successful!"
        });
    }
}

export { getAllUsers, createNewUser, getUserById, updateUserById, deleteUserById, signIn };