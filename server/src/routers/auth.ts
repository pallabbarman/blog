import { Router } from 'express';
import { login, register } from '../controllers/authController';

// router
const router = Router();

// auth routers
router.post('/register', register);
router.post('/login', login);

export default router;
