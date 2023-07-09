"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBlogs = exports.newBlog = void 0;
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const blog_1 = require("../constants/blog");
const blog_model_1 = __importDefault(require("../models/blog.model"));
const pagination_1 = __importDefault(require("../utils/pagination"));
const newBlog = async (payload) => {
    const result = (await blog_model_1.default.create(payload)).populate('user');
    return result;
};
exports.newBlog = newBlog;
const allBlogs = async (filters, paginationOption) => {
    const { search, ...filtersData } = filters;
    const andConditions = [];
    if (search) {
        andConditions.push({
            $or: blog_1.blogSearchableFields.map((field) => ({
                [field]: {
                    $regex: search,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const { page, limit, skip, sortBy, sortOrder } = (0, pagination_1.default)(paginationOption);
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = await blog_model_1.default.find(whereConditions)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit)
        .populate('user');
    const total = await blog_model_1.default.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
exports.allBlogs = allBlogs;
