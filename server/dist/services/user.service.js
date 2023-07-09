"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
/* eslint-disable import/prefer-default-export */
const user_model_1 = __importDefault(require("../models/user.model"));
const newUser = async (payload) => {
    const result = await user_model_1.default.create(payload);
    return result;
};
exports.newUser = newUser;
