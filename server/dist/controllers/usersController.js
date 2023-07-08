"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUser = exports.deleteUser = exports.updateUser = void 0;
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable object-curly-newline */
const bcrypt_1 = __importDefault(require("bcrypt"));
const blogs_js_1 = __importDefault(require("../models/blogs.js"));
const user_js_1 = __importDefault(require("../models/user.js"));
// update user
const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt_1.default.genSalt(10);
            req.body.password = await bcrypt_1.default.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await user_js_1.default.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updatedUser);
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    }
    else {
        res.status(401).json({ message: 'You can update only your account!' });
    }
};
exports.updateUser = updateUser;
// delete user
const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await user_js_1.default.findById(req.params.id);
            try {
                await blogs_js_1.default.deleteMany({ username: user?.username });
                await user_js_1.default.findByIdAndDelete(req.params.id);
                res.status(200).json({ message: 'User has been deleted!' });
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }
        catch (error) {
            res.status(404).json({ message: 'User not found!' });
        }
    }
    else {
        res.status(401).json({ message: 'You can delete only your account!' });
    }
};
exports.deleteUser = deleteUser;
// get all users
const getUsers = async (req, res) => {
    try {
        const users = await user_js_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getUsers = getUsers;
// get single user
const getUser = async (req, res) => {
    try {
        const user = await user_js_1.default.findById(req.params.id);
        if (user) {
            const userObj = user.toObject();
            const { password, ...others } = userObj;
            res.status(200).json(others);
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getUser = getUser;
