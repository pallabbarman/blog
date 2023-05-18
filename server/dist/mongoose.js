"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// mongo connection url
var MONGO_URL = process.env.MONGO_URL;
// database connection
var connectWithDB = function () {
    mongoose_1.default.set('strictQuery', true);
    mongoose_1.default
        .connect(MONGO_URL)
        .then(function () { return console.log('database connection successful!'); })
        .catch(function (err) { return console.error(err); });
};
exports.default = connectWithDB;
