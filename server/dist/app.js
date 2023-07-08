"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable object-curly-newline */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routers
app.use('/api/auth', routers_1.authRouter);
app.use('/api/users', routers_1.usersRouter);
app.use('/api/blogs', routers_1.blogRouter);
app.use('/api/categories', routers_1.categoryRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
