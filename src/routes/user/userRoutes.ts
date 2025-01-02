import { Router } from 'express'
import { getUserDetails, sendOTP, verifyOTP } from '../../controllers/user/userController';
import authMiddleware from '../../middleware/user/authMiddleware';

const router = Router();

router.post('/sendOtp', sendOTP)
router.post('/verifyOtp', verifyOTP)
router.get('/getUserDetails', authMiddleware, getUserDetails)

export default router;