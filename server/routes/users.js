import express from 'express';
import { createUser, loginUser, getAllUsers, getUser } from '../controllers/userConroller';
import { withAuth } from '../middleware';

const router = new express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);

router.get('/:id', withAuth, getUser);
router.get('/', withAuth, getAllUsers);

export default router;
