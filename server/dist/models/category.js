"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable comma-dangle */
var mongoose_1 = require("mongoose");
var categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
var Category = (0, mongoose_1.model)('Category', categorySchema);
exports.default = Category;
