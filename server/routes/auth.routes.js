import express from 'express';
import { register,sendOtp,verifyOtpAndRegister,login, logout, getCurrentUser } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/send-otp', sendOtp);
router.post('/verify-otp-and-register', verifyOtpAndRegister);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getCurrentUser);

export default router;