"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable comma-dangle */
var mongoose_1 = require("mongoose");
var blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
    },
}, {
    timestamps: true,
});
var Blogs = (0, mongoose_1.model)('Blogs', blogSchema);
exports.default = Blogs;
