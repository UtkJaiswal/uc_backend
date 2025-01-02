import { Router } from 'express'
import { sendOTP, verifyOTP } from '../../controllers/user/userController';

const router = Router();

router.post('/sendOtp', sendOTP)
router.post('/verifyOtp', verifyOTP)

export default router;