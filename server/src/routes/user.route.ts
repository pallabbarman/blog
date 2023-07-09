import { getAllUsers, getSingleUser } from 'controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);

export default router;
