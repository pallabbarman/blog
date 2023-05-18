"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = exports.authRouter = exports.categoryRouter = exports.blogRouter = void 0;
/* eslint-disable object-curly-newline */
var auth_js_1 = __importDefault(require("./auth.js"));
exports.authRouter = auth_js_1.default;
var blogs_js_1 = __importDefault(require("./blogs.js"));
exports.blogRouter = blogs_js_1.default;
var categories_js_1 = __importDefault(require("./categories.js"));
exports.categoryRouter = categories_js_1.default;
var users_js_1 = __importDefault(require("./users.js"));
exports.usersRouter = users_js_1.default;
