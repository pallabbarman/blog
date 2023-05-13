"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_js_1 = __importDefault(require("./app.js"));
const mongoose_js_1 = __importDefault(require("./mongoose.js"));
// port
const { PORT } = process.env;
app_js_1.default.listen(PORT, () => {
    // database connection
    (0, mongoose_js_1.default)();
    console.log(`Listing on port http://localhost:${PORT}`);
});
