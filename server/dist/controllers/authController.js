"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_js_1 = __importDefault(require("../models/user.js"));
// register
const register = async (req, res) => {
    try {
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(req.body.password, salt);
        const newUser = new user_js_1.default({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(200).json({ message: 'Account created successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.register = register;
// login
const login = async (req, res) => {
    try {
        const user = await user_js_1.default.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: 'Wrong credentials!' });
        }
        else {
            const validated = await bcrypt_1.default.compare(req.body.password, user.password);
            if (!validated) {
                res.status(400).json({ message: 'Wrong credentials!' });
            }
            else {
                res.status(200).json({ message: 'Successfully login!' });
            }
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.login = login;
