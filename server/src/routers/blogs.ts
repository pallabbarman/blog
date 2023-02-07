import { Router } from 'express';
import addBlogs from '../controllers/blogsController.js';

// router
const router = Router();

// blogs routers
router.post('/new', addBlogs);

export default router;
