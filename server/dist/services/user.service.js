"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleUser = exports.allUsers = void 0;
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
const user_1 = require("../constants/user");
const user_model_1 = __importDefault(require("../models/user.model"));
const pagination_1 = __importDefault(require("../utils/pagination"));
const allUsers = async (filters, paginationOption) => {
    const { search, ...filtersData } = filters;
    const andConditions = [];
    if (search) {
        andConditions.push({
            $or: user_1.userSearchableFields.map((field) => ({
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
    const result = await user_model_1.default.find(whereConditions).sort(sortCondition).skip(skip).limit(limit);
    const total = await user_model_1.default.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
exports.allUsers = allUsers;
const singleUser = async (id) => {
    const result = await user_model_1.default.findById(id);
    return result;
};
exports.singleUser = singleUser;
