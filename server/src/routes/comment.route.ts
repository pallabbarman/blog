import { createComments } from 'controllers/comment.controller';
import { Router } from 'express';

const router = Router();

router.post('/:id/create-comment', createComments);

export default router;
