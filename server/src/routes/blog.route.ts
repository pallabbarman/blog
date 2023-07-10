import { createBlog, getAllBlogs, getSingleBlog } from 'controllers/blog.controller';
import { Router } from 'express';
import { blogValidation } from 'middlewares/blog.validation';
import validateRequest from 'middlewares/validateRequest';

const router = Router();

router.post('/create-blog', validateRequest(blogValidation), createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getSingleBlog);

export default router;
