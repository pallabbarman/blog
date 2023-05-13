"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_js_1 = require("./routers/index.js");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routers
app.use('/api/auth', index_js_1.authRouter);
app.use('/api/users', index_js_1.usersRouter);
app.use('/api/blogs', index_js_1.blogRouter);
app.use('/api/categories', index_js_1.categoryRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
