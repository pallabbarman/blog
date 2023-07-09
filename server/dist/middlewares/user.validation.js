"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
/* eslint-disable import/prefer-default-export */
const user_1 = require("../constants/user");
const zod_1 = __importDefault(require("zod"));
exports.userValidation = zod_1.default.object({
    body: zod_1.default.object({
        name: zod_1.default.object({
            firstName: zod_1.default.string({
                required_error: 'First name is required',
            }),
            lastName: zod_1.default.string({
                required_error: 'Last name is required',
            }),
        }),
        email: zod_1.default
            .string({
            required_error: 'Email is required',
        })
            .email(),
        phoneNumber: zod_1.default.string({
            required_error: 'Phone number is required!',
        }),
        role: zod_1.default.enum([...user_1.role], {
            required_error: 'Gender is required',
        }),
        password: zod_1.default.string({
            required_error: 'Password is required!',
        }),
        address: zod_1.default.string({
            required_error: 'Address is required!',
        }),
        profileImage: zod_1.default.string().optional(),
    }),
});
