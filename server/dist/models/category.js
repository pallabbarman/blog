"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable comma-dangle */
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const Category = mongoose_1.default.model('Category', categorySchema);
exports.default = Category;
