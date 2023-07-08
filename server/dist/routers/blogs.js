"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogsController_1 = require("../controllers/blogsController");
// router
const router = (0, express_1.Router)();
// blogs routers
router.post('/', blogsController_1.addBlogs);
router.put('/:id', blogsController_1.editBlog);
router.get('/', blogsController_1.getBlogs);
router.get('/:id', blogsController_1.getSingleBlog);
router.delete('/:id', blogsController_1.deleteBlog);
exports.default = router;
