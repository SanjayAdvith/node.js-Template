import express from 'express';
import { login, registerUser,data } from '../controllers/userControllers.js';

import { generateToken, validateToken } from '../helper/token.js'
const router = express.Router();

router.post('/login', login);
router.post('/register', registerUser);
router.get('/hello',data)

export default router
//module.exports = router;