import { Router } from 'express'
import { sendOTP } from '../../controllers/user/userController';

const router = Router();

router.post('/sendOtp', sendOTP)

export default router;