import express from 'express';
import { Login, Signup } from '../controllers/authController.js';
import { signUpValidation, loginValidation } from '../middlewares/authValidation.js';

const router = express.Router();

router.post('/register', signUpValidation, Signup);

router.post('/login', loginValidation, Login);

export default router;