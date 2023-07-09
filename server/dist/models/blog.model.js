"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-await-in-loop */
/* eslint-disable no-use-before-define */
/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable comma-dangle */
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    meta: {
        votes: {
            type: Number,
            default: 0,
        },
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
blogSchema.pre('save', async function (next) {
    if (!this.isModified('title')) {
        return next();
    }
    const slugOptions = {
        lower: true,
        strict: true,
    };
    this.slug = (0, slugify_1.default)(this.title, slugOptions);
    let counter = 1;
    while (true) {
        const existingBlog = await Blog.findOne({ slug: this.slug });
        if (!existingBlog) {
            break;
        }
        this.slug = `${(0, slugify_1.default)(this.title, slugOptions)}-${counter}`;
        counter += 1;
    }
    next();
});
const Blog = (0, mongoose_1.model)('Blog', blogSchema);
exports.default = Blog;
