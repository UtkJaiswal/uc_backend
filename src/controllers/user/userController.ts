import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/entities/user/user'
import { generateOtp, sendOtpMessage } from '../../utils/otp/otp';
import UserOtp from '../../models/entities/user/userOtp';
import dotenv from 'dotenv';
dotenv.config();



export const sendOTP = async (req: Request, res: Response): Promise<any> => {
    try {
        const { phoneNumber } = req.body

        if (!phoneNumber) {
            return res.status(400).json({ message: 'Phone number is required' });
        }

        let user = await User.findOne({ phoneNumber });
        let wasUserRegistered = true;

        if (!user) {
            wasUserRegistered = false;

            user = new User({
                phoneNumber,
                // userRole: 2
            });

            await user.save();
        }
        
        const otp = generateOtp();
        const otpExpiryMin: number = parseInt(process.env.OTP_EXPIRY_MIN || '5', 10);
        const expiresAt = new Date(Date.now() + otpExpiryMin * 60 * 1000);
        const otpHash = UserOtp.hashOtp(otp);

        const userOtp = await UserOtp.findOne({ userId: user._id });
        
        if (!userOtp) {
            await UserOtp.create({
              userId: user._id,
              otpHash,
              expiredAt: expiresAt,
            });
        } 
        else {
            userOtp.otpHash = otpHash;
            userOtp.expiredAt = expiresAt;
            await userOtp.save();
        }

        await sendOtpMessage(phoneNumber, otp, otpExpiryMin)

        return res.status(200).json({
            message: 'OTP sent successfully',
            data: { wasUserRegistered },
        });
    }

    catch (error) {
        console.error('Error sending OTP:', error);
        return res.status(500).json({ 
            message: 'Failed to send OTP', 
            error 
        });
    }
}