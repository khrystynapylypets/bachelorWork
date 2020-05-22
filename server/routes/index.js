import express from 'express';
import users from './users';
import events from './events';

const router = new express.Router();

router.use(express.json());

router.use('/api/users', users);
router.use('/api/events', events);

export default router;
