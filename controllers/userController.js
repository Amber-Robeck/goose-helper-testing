import User from "../models/User.js";
import gooseHelper from "goose-helper";

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

export { getAllUsers, createNewUser, getUserById, updateUserById, deleteUserById };