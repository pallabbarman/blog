"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categoriesController_js_1 = require("../controllers/categoriesController.js");
// router
var router = (0, express_1.Router)();
// category routers
router.post('/', categoriesController_js_1.addCategories);
router.get('/', categoriesController_js_1.getCategories);
router.delete('/:id', categoriesController_js_1.deleteCategory);
exports.default = router;
