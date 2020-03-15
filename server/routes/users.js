import express from 'express'
import { createUser } from '../controllers/userConroller'

const router = new express.Router()

router.post('/register', createUser)

export default router