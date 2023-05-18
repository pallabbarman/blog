"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var app_js_1 = __importDefault(require("./app.js"));
var mongoose_js_1 = __importDefault(require("./mongoose.js"));
// port
var PORT = process.env.PORT;
app_js_1.default.listen(PORT, function () {
    // database connection
    (0, mongoose_js_1.default)();
    console.log("Listing on port http://localhost:".concat(PORT));
});
