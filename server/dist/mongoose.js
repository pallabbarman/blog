"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// mongo connection url
const { MONGO_URL } = process.env;
// database connection
const connectWithDB = () => {
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default
        .connect(MONGO_URL)
        .then(() => console.log('database connection successful!'))
        .catch((err) => console.error(err));
};
exports.default = connectWithDB;
