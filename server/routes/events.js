import express from 'express';
import { createEvent, getAllEvents } from '../controllers/eventController';
import { withAuth } from '../middleware';

const router = new express.Router();

router.post('/create', withAuth, createEvent);
router.get('/', withAuth, getAllEvents);

export default router;
