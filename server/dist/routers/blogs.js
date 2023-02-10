import { Router } from 'express';
import { addBlogs, deleteBlog, editBlog, getBlogs, getSingleBlog, } from '../controllers/blogsController.js';
// router
const router = Router();
// blogs routers
router.post('/new', addBlogs);
router.put('/edit/:id', editBlog);
router.get('/', getBlogs);
router.get('/:id', getSingleBlog);
router.delete('/:id', deleteBlog);
export default router;
