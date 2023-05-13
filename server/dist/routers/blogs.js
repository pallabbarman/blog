"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogsController_js_1 = require("../controllers/blogsController.js");
// router
const router = (0, express_1.Router)();
// blogs routers
router.post('/', blogsController_js_1.addBlogs);
router.put('/:id', blogsController_js_1.editBlog);
router.get('/', blogsController_js_1.getBlogs);
router.get('/:id', blogsController_js_1.getSingleBlog);
router.delete('/:id', blogsController_js_1.deleteBlog);
exports.default = router;
