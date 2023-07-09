"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
/* eslint-disable import/prefer-default-export */
const zod_1 = __importDefault(require("zod"));
exports.blogValidation = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string({
            required_error: 'Title is required',
        }),
        content: zod_1.default.string({
            required_error: 'Content is required',
        }),
        comment: zod_1.default.string({
            required_error: 'Phone number is required!',
        }),
        thumbnail: zod_1.default.string({
            required_error: 'Password is required!',
        }),
        meta: zod_1.default
            .object({
            votes: zod_1.default.number(),
        })
            .optional(),
        user: zod_1.default.string({
            required_error: 'User is required',
        }),
    }),
});
