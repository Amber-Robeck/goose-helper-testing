import User from "../models/User.js";
import gooseHelper from "goose-helper";

function getAllUsers(req, res) {
    gooseHelper(req, res, User.find({}));
}

export { getAllUsers };