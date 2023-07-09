import { createUser } from 'controllers/auth.controller';
import { Router } from 'express';
import { userValidation } from 'middlewares/user.validation';
import validateRequest from 'middlewares/validateRequest';

const router = Router();

router.post('/signup', validateRequest(userValidation), createUser);

export default router;
