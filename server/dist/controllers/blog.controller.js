"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogs = exports.createBlog = void 0;
/* eslint-disable import/prefer-default-export */
const blog_1 = require("../constants/blog");
const pagination_1 = __importDefault(require("../constants/pagination"));
const http_status_1 = __importDefault(require("http-status"));
const blog_service_1 = require("../services/blog.service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const pick_1 = __importDefault(require("../utils/pick"));
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
exports.createBlog = (0, catchAsync_1.default)(async (req, res) => {
    const { ...blog } = req.body;
    const result = await (0, blog_service_1.newBlog)(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog created successfully!',
        data: result,
    });
});
exports.getAllBlogs = (0, catchAsync_1.default)(async (req, res) => {
    const filters = (0, pick_1.default)(req.query, blog_1.blogFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.default);
    const result = await (0, blog_service_1.allBlogs)(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blogs retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
});
