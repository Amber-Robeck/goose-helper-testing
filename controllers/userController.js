import User from "../models/User.js";
import gooseHelper from "goose-helper";

function getAllUsers(req, res) {
    gooseHelper(req, res, User.find({}));
};

function createNewUser(req, res) {
    gooseHelper(req, res, User.create(req.body));
}

export { getAllUsers, createNewUser };