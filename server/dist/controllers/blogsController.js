"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = exports.getSingleBlog = exports.deleteBlog = exports.editBlog = exports.addBlogs = void 0;
const blogs_js_1 = __importDefault(require("../models/blogs.js"));
// get all blogs
const getBlogs = async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let blogs;
        if (username) {
            blogs = await blogs_js_1.default.find({ username });
        }
        else if (catName) {
            blogs = await blogs_js_1.default.find({
                categories: {
                    $in: [catName],
                },
            });
        }
        else {
            blogs = await blogs_js_1.default.find();
        }
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getBlogs = getBlogs;
// get single blog
const getSingleBlog = async (req, res) => {
    try {
        const blog = await blogs_js_1.default.findById(req.params.id);
        res.status(200).json(blog);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getSingleBlog = getSingleBlog;
// add blog
const addBlogs = async (req, res) => {
    const newBlog = new blogs_js_1.default(req.body);
    try {
        const saveBlog = await newBlog.save();
        res.status(200).json(saveBlog);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.addBlogs = addBlogs;
// edit blog
const editBlog = async (req, res) => {
    try {
        const blog = await blogs_js_1.default.findById(req.params.id);
        if (blog?.username === req.body.username) {
            try {
                const updateBlog = await blogs_js_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                }, {
                    new: true,
                });
                res.status(200).json(updateBlog);
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }
        else {
            res.status(401).json({ message: 'You can update only your post!' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.editBlog = editBlog;
// delete blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await blogs_js_1.default.findById(req.params.id);
        if (blog?.username === req.body.username) {
            try {
                await blog?.delete();
                res.status(200).json({ message: 'Post has been deleted!' });
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }
        else {
            res.status(401).json({ message: 'You can delete only your post!' });
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.deleteBlog = deleteBlog;
