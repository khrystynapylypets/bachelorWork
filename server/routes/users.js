import express from 'express'
import { createUser, loginUser } from '../controllers/userConroller'

const router = new express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)

export default router