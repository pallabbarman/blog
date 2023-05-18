"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = exports.getSingleBlog = exports.deleteBlog = exports.editBlog = exports.addBlogs = void 0;
var blogs_js_1 = __importDefault(require("../models/blogs.js"));
// get all blogs
var getBlogs = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, catName, blogs, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = req.query.user;
                catName = req.query.cat;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                blogs = void 0;
                if (!username) return [3 /*break*/, 3];
                return [4 /*yield*/, blogs_js_1.default.find({ username: username })];
            case 2:
                blogs = _a.sent();
                return [3 /*break*/, 7];
            case 3:
                if (!catName) return [3 /*break*/, 5];
                return [4 /*yield*/, blogs_js_1.default.find({
                        categories: {
                            $in: [catName],
                        },
                    })];
            case 4:
                blogs = _a.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, blogs_js_1.default.find()];
            case 6:
                blogs = _a.sent();
                _a.label = 7;
            case 7:
                res.status(200).json(blogs);
                return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                res.status(500).json({ message: error_1 });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.getBlogs = getBlogs;
// get single blog
var getSingleBlog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var blog, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, blogs_js_1.default.findById(req.params.id)];
            case 1:
                blog = _a.sent();
                res.status(200).json(blog);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ message: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getSingleBlog = getSingleBlog;
// add blog
var addBlogs = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newBlog, saveBlog, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newBlog = new blogs_js_1.default(req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newBlog.save()];
            case 2:
                saveBlog = _a.sent();
                res.status(200).json(saveBlog);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).json({ message: error_3 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addBlogs = addBlogs;
// edit blog
var editBlog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var blog, updateBlog, error_4, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                return [4 /*yield*/, blogs_js_1.default.findById(req.params.id)];
            case 1:
                blog = _a.sent();
                if (!((blog === null || blog === void 0 ? void 0 : blog.username) === req.body.username)) return [3 /*break*/, 6];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, blogs_js_1.default.findByIdAndUpdate(req.params.id, {
                        $set: req.body,
                    }, {
                        new: true,
                    })];
            case 3:
                updateBlog = _a.sent();
                res.status(200).json(updateBlog);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                res.status(500).json({ message: error_4 });
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                res.status(401).json({ message: 'You can update only your post!' });
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_5 = _a.sent();
                res.status(500).json({ message: error_5 });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.editBlog = editBlog;
// delete blog
var deleteBlog = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var blog, error_6, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                return [4 /*yield*/, blogs_js_1.default.findById(req.params.id)];
            case 1:
                blog = _a.sent();
                if (!((blog === null || blog === void 0 ? void 0 : blog.username) === req.body.username)) return [3 /*break*/, 6];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (blog === null || blog === void 0 ? void 0 : blog.delete())];
            case 3:
                _a.sent();
                res.status(200).json({ message: 'Post has been deleted!' });
                return [3 /*break*/, 5];
            case 4:
                error_6 = _a.sent();
                res.status(500).json({ message: error_6 });
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 7];
            case 6:
                res.status(401).json({ message: 'You can delete only your post!' });
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_7 = _a.sent();
                res.status(500).json({ message: error_7 });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.deleteBlog = deleteBlog;
