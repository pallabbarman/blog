import { createBlog, getAllBlogs } from 'controllers/blog.controller';
import { Router } from 'express';
import { blogValidation } from 'middlewares/blog.validation';
import validateRequest from 'middlewares/validateRequest';

const router = Router();

router.post('/create-blog', validateRequest(blogValidation), createBlog);
router.get('/', getAllBlogs);

export default router;
