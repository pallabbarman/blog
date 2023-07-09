"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_controller_1 = require("../controllers/blog.controller");
const express_1 = require("express");
const blog_validation_1 = require("../middlewares/blog.validation");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const router = (0, express_1.Router)();
router.post('/create-blog', (0, validateRequest_1.default)(blog_validation_1.blogValidation), blog_controller_1.createBlog);
router.get('/', blog_controller_1.getAllBlogs);
exports.default = router;
