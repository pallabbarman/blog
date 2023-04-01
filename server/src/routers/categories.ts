import { Router } from 'express';
import {
    addCategories,
    deleteCategory,
    getCategories,
} from '../controllers/categoriesController.js';

// router
const router = Router();

// category routers
router.post('/', addCategories);
router.get('/', getCategories);
router.delete('/:id', deleteCategory);

export default router;
