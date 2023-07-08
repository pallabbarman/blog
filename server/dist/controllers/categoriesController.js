"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.getCategories = exports.addCategories = void 0;
const category_js_1 = __importDefault(require("../models/category.js"));
// get all category
const getCategories = async (req, res) => {
    try {
        const categories = await category_js_1.default.find();
        res.status(200).json(categories);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.getCategories = getCategories;
// add category
const addCategories = async (req, res) => {
    const newCategory = new category_js_1.default(req.body);
    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.addCategories = addCategories;
// delete category
const deleteCategory = async (req, res) => {
    try {
        const category = await category_js_1.default.findById(req.params.id);
        await category?.delete();
        res.status(200).json({ message: 'Category has been deleted!' });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.deleteCategory = deleteCategory;
