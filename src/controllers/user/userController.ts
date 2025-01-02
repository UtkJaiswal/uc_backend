import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../../models/entities/user/user'
import { generateOtp, sendOtpMessage, verifyCode } from '../../utils/otp/otp';
import UserOtp from '../../models/entities/user/userOtp';
import dotenv from 'dotenv';
import { generateToken } from '../../utils/jwt/token';
dotenv.config();



export const sendOTP = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
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
        
        // const otp = generateOtp();
        // const otpExpiryMin: number = parseInt(process.env.OTP_EXPIRY_MIN || '5', 10);
        // const expiresAt = new Date(Date.now() + otpExpiryMin * 60 * 1000);
        // const otpHash = UserOtp.hashOtp(otp);

        // const userOtp = await UserOtp.findOne({ userId: user._id });
        
        // if (!userOtp) {
        //     await UserOtp.create({
        //       userId: user._id,
        //       otpHash,
        //       expiredAt: expiresAt,
        //     });
        // } 
        // else {
        //     userOtp.otpHash = otpHash;
        //     userOtp.expiredAt = expiresAt;
        //     await userOtp.save();
        // }

        await sendOtpMessage(phoneNumber)

        return res.status(200).json({
            message: 'OTP sent successfully',
            data: { wasUserRegistered },
        });
    }

    catch (error) {
        console.error('Error sending OTP:', error);
        next(error);
    }
}


export const verifyOTP = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { phoneNumber, otp } = req.body

        if (!phoneNumber) {
            return res.status(400).json({ message: 'Phone number is required' });
        }

        if (!otp) {
            return res.status(400).json({ message: 'OTP is required' });
        }

        const user = await User.findOne({ phoneNumber });

        if(!user) {
            return res.status(400).json({ message: 'User not found' });

        }

        const isValid = await verifyCode(phoneNumber, otp);

        if (!isValid) {
            return res.status(400).json({ message: 'Invalid OTP or OTP has expired' });
        }

        const token : string = generateToken(user._id.toString())
        

        return res.status(200).json({ 
            message: 'OTP verified successfully',
            data: {
                token:token
            }
        });
    }

    catch (error) {
        next(error);
    }
}