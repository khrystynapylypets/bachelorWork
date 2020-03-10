import express from 'express';
import users from './users';

const router = new express.Router();

router.use(express.json());

router.use('/api/users', users);

export default router;
