/* eslint-disable object-curly-newline */
import { Router } from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/usersController.js';
// router
const router = Router();
// users routers
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
