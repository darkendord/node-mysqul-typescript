"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = async (req, res) => {
    const users = await user_1.default.findAll();
    res.json(users);
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "getUser",
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: "postUser",
        body
    });
};
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "putUser",
        body,
        id
    });
};
exports.putUser = putUser;
const deletetUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "deleteUser",
        id
    });
};
exports.deletetUser = deletetUser;
//# sourceMappingURL=users.js.map