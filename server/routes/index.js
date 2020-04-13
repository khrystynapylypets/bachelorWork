import express from 'express';
import users from './users';
import { getAllSubjects } from '../controllers/subjectController'

const router = new express.Router();

router.use(express.json());

router.use('/api/users', users);

router.use('/api/subjects', getAllSubjects);

export default router;
